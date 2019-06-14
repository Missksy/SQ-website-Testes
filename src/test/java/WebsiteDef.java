import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import static junit.framework.TestCase.assertEquals;

public class WebsiteDef {
    private WebDriver driver;

    private boolean acceptNextAlert = true;
    private static Contact[] contacts = null;

    @Before
    public void setUp() {

        //System.setProperty("webdriver.chrome.driver","drivers/chromedriver.exe");

        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        driver = new ChromeDriver(opt);

        try {
            getInformationFromDatabase("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    @After
    public void tearDown() {
        driver.close();
    }


    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        driver.get("http://34.76.104.159/");
        assertEquals ("test",driver.getTitle());
    }

    @And("^I can see the text \"([^\"]*)\"$")
    public void iCanSeeTheText(String text) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.tagName("body")),text));
    }

    @Given("^Access to url$")
    public void accessToUrl() {
        driver.get("http://35.195.187.244/");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleIs("test"));
        assertEquals ("test", driver.getTitle());
    }

    @Then("^the title of the page should be \"([^\"]*)\"$")
    public void theTitleOfThePageShouldBe(String title) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }

    @Then("^check if table is populated$")
    public void checkIfTableIsPopulated() {

        //wait until...
        WebDriverWait wait = new WebDriverWait(driver, 6);

        //if id Contact exists
        // test type 1
        //wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("Contacts"), 0));

        // test type 2
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//table[@id='Contacts']/tbody/tr"), 0));
    }

    @Then("^check if in random position the values are correctly$")
    public void checkIfInRandomPositionTheValuesAreCorrectly() {
       // WebDriverWait wait = new WebDriverWait(driver, 6);
        checkIfTableIsPopulated();
        checkValues(3, driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr[3]/td")));
    }

    private void checkValues(int position, List<WebElement> elements) {
        //name
        assertEquals(elements.get(0).getText(), contacts[position - 1].getGivenName());
        assertEquals(elements.get(1).getText(), contacts[position - 1].getSurname());
        assertEquals(elements.get(2).getText(), contacts[position - 1].getEmail());
        assertEquals(elements.get(3).getText(), contacts[position - 1].getPhone().toString());
        assertEquals(elements.get(4).getText(), contacts[position - 1].getSource());
    }


    private static void getInformationFromDatabase(String url) throws Exception {
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
        contacts = gson.fromJson(jsonStr, Contact[].class);
    }

}