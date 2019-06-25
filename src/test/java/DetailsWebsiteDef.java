import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.lang.model.element.Element;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

import static java.util.Arrays.stream;
import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class DetailsWebsiteDef {
    private static final String IP = "http://130.211.57.242/";
    private WebDriver driver;

    private static Contact[] contacts = null;

    @Before
    public void setUp() {

        if(!System.getProperty("user.dir").contains("jenkins"))
            System.setProperty("webdriver.chrome.driver","drivers/chromedriver.exe");

        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(opt);

        try {
            contacts  = getInformationFromDatabase();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private static Contact[] getInformationFromDatabase() throws Exception {
        StringBuilder result = new StringBuilder();
        HttpURLConnection conn = (HttpURLConnection) new URL("http://contactsqs2.apphb.com/Service.svc/rest/contacts").openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Accept", "application/json");
        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }
        rd.close();

        String jsonStr = result.toString();
        Gson gson = new Gson();
        return gson.fromJson(jsonStr, Contact[].class);
    }

    private static Contact getDetailInforFromDB(String url) throws Exception {
        StringBuilder result = new StringBuilder();
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Accept", "application/json");
        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }
        rd.close();

        String jsonStr = result.toString();
        Gson gson = new Gson();
        return gson.fromJson(jsonStr, Contact.class);
    }


    @After
    public void tearDown() {
        driver.close();
    }

    @Given("^Access to url of detail$")
    public void accessToUrlOfDetail() {
        driver.get(IP +"details.html");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleIs("Detalhes de Contacto"));
        assertEquals ("Detalhes de Contacto", driver.getTitle());

    }

    @Then("^the title of the detail page should be \"([^\"]*)\"$")
    public void theTitleOfTheDetailPageShouldBe(String title) {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }

    @Then("^I should be see photo of contact$")
    public void iShouldBeSeePhotoOfContact() throws MalformedURLException, InterruptedException {
        driver.get(IP +"details.html?guid=e829ec04-e333-42a3-a380-28876b28472a");

        WebDriverWait wait = new WebDriverWait(driver, 3);

        // if ajax down load yet, show avatar foto
        String xPath = "//section[@id='Section_top']/figure/div/img";
        wait.until( ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));
        Thread.sleep(100);

        if (!driver.getCurrentUrl().contains("guid")) {
            URL linkPhoto = new URL(driver.findElement(By.xpath(xPath)).getAttribute("src"));

            String urlWebsite = linkPhoto.getPath().split("/")[2];
            assertEquals("profile.png", urlWebsite);
        }else{
            // if ajax load, check if photo exists
            //Updating...
            URL linkPhoto = new URL(driver.findElement(By.xpath(xPath)).getAttribute("src"));
            String urlWebsite = linkPhoto.getHost();
            assertTrue(urlWebsite.contains("34.90.69.90"));
        }

    }



    @Given("^Access to url of detail by \"([^\"]*)\"$")
    public void accessToUrlOfDetailBy(String guid) {
        Contact contactsByGuid;
        WebDriverWait wait = new WebDriverWait(driver, 3);
        try {
            // get id guild in list of contacts
            String contactGuid = contacts[Integer.parseInt(guid)].getGuid();

            // get  ID guid From BD
            contactsByGuid = getDetailInforFromDB("http://contactsqs2.apphb.com/Service.svc/rest/contact/byguid/" + contactGuid);

            driver.get(IP +"details.html?guid="+ contactGuid);

        } catch (Exception e) {
            e.printStackTrace();
            fail("Error on get guid contact");
        }

        String xPath = "//section[@id='Section_top']/figure/figcaption/h1";
        wait.until( ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));

    }

    @Then("^I should be see details of contact by \"([^\"]*)\"$")
    public void iShouldBeSeeDetailsOfContactBy(String guid) {
        Contact contactsByGuid;

        WebDriverWait wait = new WebDriverWait(driver, 3);

        String xPath = "//section[@id='Section_top']/figure/figcaption/h1";

        try {
            // get id guild in list of contacts
            String contactGuid = contacts[Integer.parseInt(guid)].getGuid();

            // get  ID guid From BD
            contactsByGuid = getDetailInforFromDB("http://contactsqs2.apphb.com/Service.svc/rest/contact/byguid/" + contactGuid);

            // check if guid exist and compare
            URL urlContact = new URL(driver.getCurrentUrl());

            if (contactsByGuid.getGuid().equals(urlContact.getQuery().split("=")[1])) {
                wait.until( ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));
                assertEquals(contactsByGuid.getGuid(), urlContact.getQuery().split("=")[1]);
            }else{
                fail("Contact not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            fail("Error on get guid contact");
        }
    }


    @Then("^I should be see details of contact aren't empty, by \"([^\"]*)\"$")
    public void iShouldBeSeeDetailsOfContactArenTEmpty(String guid) {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        try {
            //Presents information (a)
            wait.until(ExpectedConditions.not(ExpectedConditions.attributeContains(By.className("email"), "href", "#")));
        }catch (TimeoutException ex){
            //class hidden exists on /p
            wait.until(ExpectedConditions.attributeContains(By.xpath(".//div[@class='email-col']"), "style", "display: none;"));
        }

        List<WebElement> detailsElements = driver.findElements(By.xpath(".//div[@class='infos__detail']"));

        // check if hidden and if not hidden compare with real values

        // check email
        if(!detailsElements.get(0).findElement(By.className("email-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("email")).getText(), contacts[Integer.parseInt(guid)].getEmail());
        }

        // check phone
        if(!detailsElements.get(0).findElement(By.className("phone-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("phone")).getText(), contacts[Integer.parseInt(guid)].getPhone().toString());
        }

        // check birthday
        if(!detailsElements.get(0).findElement(By.className("birth-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("birthday")).getText(), contacts[Integer.parseInt(guid)].getBirthday());
        }

        // check address
        if(!detailsElements.get(0).findElement(By.className("address-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("address")).getText(), contacts[Integer.parseInt(guid)].getStreetAddress());
        }

        // check city
        if(!detailsElements.get(0).findElement(By.className("city-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("city")).getText(), contacts[Integer.parseInt(guid)].getCity());
        }

        // check company
        if(!detailsElements.get(0).findElement(By.className("company-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("company")).getText(), contacts[Integer.parseInt(guid)].getCompany());
        }

        // check company
        if(!detailsElements.get(0).findElement(By.className("hobby-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("hobby")).getText(), contacts[Integer.parseInt(guid)].getOccupation());
        }

        // check source
        if(!detailsElements.get(0).findElement(By.className("source-col")).getAttribute("style").contains("none")){
            assertEquals(driver.findElement(By.className("source")).getText(), contacts[Integer.parseInt(guid)].getSource());
        }
    }

    @When("^I click on button in details$")
    public void iClickOnButtonInDetails() {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        WebElement button =  driver.findElement(By.xpath("//a[contains(text(),'Voltar à listagem')]"));
        button.click();
    }

    @Then("^the page should be back to index page$")
    public void thePageShouldBeBackToIndexPage() {
        driver.get(IP +"index.html");
    }


    @Then("^check if in a position guid the image is loaded with \"([^\"]*)\" and \"([^\"]*)\" \\(\"([^\"]*)\"\\)$")
    public void checkIfInAPositionGuidTheImageIsLoadedWithAnd(String width, String height, String guid) throws Throwable {
        {
            WebDriverWait wait = new WebDriverWait(driver, 6);
            String xPath = ".//div/img@class='rounded-circle'";

            // wait until load ajax
            try {
                wait.until(ExpectedConditions.not(ExpectedConditions.attributeContains(By.className("rounded-circle"), "src", "images/profile.png")));
            } catch (TimeoutException ex) {
                wait.until(ExpectedConditions.attributeContains(driver.findElement(By.xpath(xPath)), "src", contacts[Integer.parseInt(guid)].getPhotoUrl().toString()));
                assertEquals(driver.findElement(By.className("rounded-circle")).getSize().getWidth(), Integer.parseInt(width));
                assertEquals(driver.findElement(By.className("rounded-circle")).getSize().getHeight(), Integer.parseInt(height));
            }

        }
    }
}