import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;


import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class WebsiteDef {
    private static final String IP = "http://34.77.8.124/";
    private WebDriver driver;

    private boolean acceptNextAlert = true;
    private static Contact[] contacts = null;
    private static Contact contact = null;
    private  static  String linkGuid =  "";

    @Before
    public void setUp() {

        if(!System.getProperty("user.dir").contains("jenkins"))
            System.setProperty("webdriver.chrome.driver","drivers/chromedriver.exe");

        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(opt);

        try {
            contacts  = getInformationFromDatabase("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private static Contact[] getInformationFromDatabase(String url) throws Exception {
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


    @Given("^Access to url$")
    public void accessToUrl() {
        driver.get(IP);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleIs("Contactos"));
        assertEquals ("Contactos", driver.getTitle());
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

        // check if exist
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//table[@id='Contacts']/tbody/tr"), 0));
    }

//    @Then("^check if in random position the values are correctly$")
//    public void checkIfInRandomPositionTheValuesAreCorrectly() {
//       // WebDriverWait wait = new WebDriverWait(driver, 6);
//        checkIfTableIsPopulated();
//        checkValues(3, driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr[3]/td")));
//    }

//    @Then("^check if in random position the values are correctly$")
//    public void checkIfInRandomPositionTheValuesAreCorrectly() {
//        // WebDriverWait wait = new WebDriverWait(driver, 6);
//        checkIfTableIsPopulated();
//        if(driver.findElement(By.xpath(".//table[@id='Contacts']/thead/tr/th[1]")).getClass().toString() == "sorting_asc"){
//            checkValues(3, driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr[3]/td")));
//        }else{
//            fail("Error - path is not correctly");
//        }
//    }


    @Then("^check if in random position the values are correctly \"([^\"]*)\"$")
    public void checkIfInRandomPositionTheValuesAreCorrectly(String position) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        String xPath = "//li[@id='Contacts_next']/a";
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));


        // check if has elements in table
        checkIfTableIsPopulated();

        // get position in BD to verify
        int p = 0;
        switch (position){
            case "First":
                p = 0;
                break;
            case "Middle":
                p = (int) Math.floor(contacts.length / 2);
                break;
            case "Last":
                p = contacts.length -1;
                break;
            default:
                fail("Position not recognize");
                break;
        }

        // get number of clicks in pagination "Next" except if value is "0"
        int numberOfNextClick = 0;
        if(p != 0){
            numberOfNextClick = Integer.parseInt(String.valueOf(p).substring(0, String.valueOf(p).length() - 1));
        }
        Thread.sleep(1000);
        // get xpath of element "next"
        //WebElement paginationNext = driver.findElement(By.xpath(".//li[@id='Contacts_next']/a"));

        WebElement paginationNext = driver.findElement(By.xpath(xPath));
        // check if element is not null
        if(paginationNext != null){

            //Get number of click to perform on "Next Button", get the rowNumber on the Table to verify against the contact
            int rowNumber = 0;
            if(String.valueOf(p).length() == 1){
                rowNumber = p + 1;
            } else {
                if (Integer.parseInt(String.valueOf(p).substring(String.valueOf(p).length() - 1)) == 0) {
                    rowNumber = 10;
                    numberOfNextClick--;
                } else {
                    rowNumber = Integer.parseInt(String.valueOf(p).substring(String.valueOf(p).length() - 1)) + 1;
                }
            }

            //get first element of the header
            WebElement orderByName = driver.findElement(By.xpath(".//table[@id='Contacts']/thead/tr/th[1]"));

            if(orderByName != null) {

                //Is it ordered by asc?
                if (!orderByName.getClass().toString().equals("sorting_asc")) {
                    //make it order by asc
                    do {
                        orderByName.click();
                    } while (orderByName.getClass().toString().equals("sorting_asc"));
                }

                //Click X times
                WebElement element;
                for(int i = 0; i < numberOfNextClick; i++ ){
                    //driver.findElement(By.xpath(".//li[@class='.page-item.next']/a")).click();
                    element = driver.findElement(By.xpath(xPath));
                    if(element != null){
                        element.click();
                    }else{
                        fail("asd");
                    }
                }

                //Verify value
                checkValues(p, driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr[" + rowNumber + "]/td")));

            }else{
                fail("Error - xpath is null");
            }
        }else {
            fail("Error - xpath is null");
        }


    }

    private void checkValues(int position, List<WebElement> elements) {
        // Collections.sort(contacts);
        Arrays.asList(contacts).sort((s1, s2) ->  s2.getGivenName().compareToIgnoreCase(s1.getGivenName()));
        
        assertEquals(elements.get(0).getText(), contacts[position].getGivenName());
        assertEquals(elements.get(1).getText(), contacts[position].getSurname());
        assertEquals(elements.get(2).getText(), contacts[position].getEmail());
        assertEquals(elements.get(3).getText(), contacts[position].getPhone().toString());
        assertEquals(elements.get(4).getText(), contacts[position].getSource());
    }

    @When("^I click arrow image$")
    public void iClickArrowImage() {
        WebElement button = driver.findElement(By.className("btn-pushToTop"));
        button.click();
    }

    @Then("^the page should be back to top$")
    public void thePageShouldBeBackToTop() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(0,0);");
    }

    @Then("^the table should be filter by option selected \"([^\"]*)\"$")
    public void theTableShouldBeFilterByOptionSelected(String filter) throws Throwable {
        Contact[] filterContacts = null;

        if(filter.equals("0")){
            filterContacts = contacts;
        }else {
            try {
                filterContacts = getInformationFromDatabase("http://contactsqs2.apphb.com/Service.svc/rest/contacts/bysource/" + filter);
            } catch (Exception e) {
                e.printStackTrace();
                fail("Error on filtering contacts:" + filter);
            }
        }
        // check if table has values
        checkIfTableIsPopulated();

        // Get xpath of select box  by source
        List<WebElement> select = driver.findElements(By.xpath(".//select[@id='FilterBySource']"));

        if(!select.isEmpty()){
            //Get values of select box
            Select selectBox = new Select(select.get(0));
            selectBox.selectByValue(filter);
            Thread.sleep(500);

            //wait until table destroy and create another with data
            checkIfTableIsPopulated();

            List<String> chunks = new LinkedList<String>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(driver.findElement(By.xpath(".//div[@id='Contacts_info']")).getText());
            while (matcher.find()) {
                chunks.add( matcher.group() );
            }
            if(chunks.isEmpty()){
                fail("chunks came empty. Verify if the XPath is correct");
            }else{
                assertEquals(filterContacts.length, Integer.parseInt(chunks.get(chunks.size() - 1)));
            }
        }else{
            //Error!
            fail("Error - path is not correctly");
        }
    }


    // check if keyword is equal to value of each column
    public List<Contact> filterContact (String keyword){
        return Arrays.stream(contacts).filter(
                contact -> (
                        (contact.getGivenName().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getSurname().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getEmail().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getPhone().toString().equals(keyword) ||
                                contact.getSource().toLowerCase().contains(keyword.toLowerCase()))
                )).collect(Collectors.toList());
    }

    @When("^I search \"([^\"]*)\"$")
    public void iSearch(String keyword) throws Throwable {
        //wait for element load
        checkIfTableIsPopulated();

        // give the xpath of input search
        String xPath = ".//div[@id='Contacts_filter']/label/input";

        // verify if exists
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until((ExpectedConditions.elementToBeClickable(By.xpath(xPath))));


        // find element and write on input search
        WebElement searchBar = driver.findElement(By.xpath(xPath));
        searchBar.sendKeys(keyword);
        wait.until((ExpectedConditions.textToBePresentInElementValue(By.xpath(xPath), keyword)));
    }

    @Then("^the result on table should be only the values in columns that just searched, related to \"([^\"]*)\"$")
    public void theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String keyword) throws Throwable {

        //write text on search bar input
        LinkedList<Contact> filterContacts = new LinkedList<>(filterContact(keyword));

        // check number of results in table after filter in input search
        List<String> chunks = new LinkedList<String>();
        Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(driver.findElement(By.xpath(".//div[@id='Contacts_info']")).getText());
        while (matcher.find()) {
            chunks.add( matcher.group() );
        }
        if(!chunks.isEmpty()){
            assertEquals(filterContacts.size(), Integer.parseInt(chunks.get(chunks.size() - 2)));

            List<WebElement> list = driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr"));

            if(!list.isEmpty()){
                for(int i = 0; i <= 5 && i < Integer.parseInt(chunks.get(chunks.size() - 2)); i++ ){

                    List<WebElement> tds = list.get(i).findElements(By.xpath("td"));
                    boolean hasResult = false;
                    for(int j = 0; j < tds.size(); j++){
                        if(tds.get(j).getText().toLowerCase().contains(keyword.toLowerCase())){
                            hasResult = true;
                        }
                    }
                    if(!hasResult){
                        fail("Found a contact with wrong filter");
                    }
                }
            }else{
                fail("List came Empty. Verify if the XPath is correct");
            }
        }else{
            fail("chunks came empty. Verify if the XPath is correct");
        }
    }


    @When("^I click button \"([^\"]*)\"$")
    public void iClickButton(String button) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        // get path of button
        String xPath =".//a[contains(text(),'ver mais')]";

        // check button
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(xPath)));

        // confirm name button
        assertEquals("ver mais", button);

        // get attribute href
        WebElement link = driver.findElement(By.xpath(xPath));
        linkGuid = link.getAttribute("href");

        // click button
        link.click();
       // driver.findElement(By.xpath(xPath)).click();

    }

    @Then("^Should be go details page and show the details of contact by request \"([^\"]*)\"$")
    public void shouldBeGoDetailsPageAndShowTheDetailsOfContactByRequest(String guid) throws Throwable {
        //  driver.get(IP +"details.html?guid=" + guid);
        Contact contactsByGuid = null;

        // get request query string guid and split by "=" and get last part of queryString
        if(linkGuid.length()> 0) {
            URL guidIdentify = new URL(linkGuid);
            guid = guidIdentify.getQuery().split("=")[1].toString();
            System.out.println(guid);
            if(guid.equals("0")){
                contactsByGuid = contact;
            }else {
                try {
                    contactsByGuid = getDetailInforFromDB("http://contactsqs2.apphb.com/Service.svc/rest/contact/byguid/" + guid);
                } catch (Exception e) {
                    e.printStackTrace();
                    fail("Error on get guid contact:" + guid);
                }
            }

            if(!contactsByGuid.equals(0)){
                if(contactsByGuid.getGuid() == guid){
                    assertEquals(contactsByGuid.getGuid().toString(), guid);
                    assertEquals(IP +"details.html?guid=" + guid, linkGuid);
                }
            }else{
                fail("Error on get guid contact:" + guid);
            }
        }else {
            //Error!
            fail("Error - not found guid");
        }
    }





    // DETAILS PAGE

    @Given("^Access to url of detail$")
    public void accessToUrlOfDetail() {
        driver.get(IP +"details.html");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleIs("Detalhes de Contacto"));
        assertEquals ("Detalhes de Contacto", driver.getTitle());

    }

    @Then("^the title of the detail page should be \"([^\"]*)\"$")
    public void theTitleOfTheDetailPageShouldBe(String title) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }

    @Then("^I should be see photo of contact$")
    public void iShouldBeSeePhotoOfContact() throws MalformedURLException {
        driver.get(IP +"details.html?guid=e829ec04-e333-42a3-a380-28876b28472a");

        WebDriverWait wait = new WebDriverWait(driver, 3);

        // if ajax down load yet, show avatar foto
        String xPath = "//section[@id='Section_top']/figure/div/img";
        wait.until( ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));

        URL linkPhoto = new URL(driver.findElement(By.xpath(xPath)).getAttribute("src"));
        if (!driver.getCurrentUrl().contains("guid")) {
            String urlWebsite = linkPhoto.getPath().split("/")[2].toString();
            assertEquals("profile.png", urlWebsite);
        }else{
            // if ajax load, check if photo exists
            String urlWebsite = linkPhoto.getHost().toString();
            assertEquals(urlWebsite, "randomuser.me");
        }

    }
}