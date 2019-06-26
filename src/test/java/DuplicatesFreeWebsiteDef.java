import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class DuplicatesFreeWebsiteDef {
    private static final String IP = "http://130.211.57.242/";
    private WebDriver driver;

    private static Contact[] contacts = null;

    private static LinkedList<Contact> deletedContacts;
    private static LinkedList<String> removedFromTableContacts;

    @Before
    public void setUp() {

        if (!System.getProperty("user.dir").contains("jenkins"))
            System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");

        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(opt);

        try {
            contacts = getInformationFromDatabase("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
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

    private List<Contact> filterContact(String keyword, LinkedList<Contact> linkedList){
        //convert to Contact[]
        Contact[] contactsToEvaluateArr = new Contact[linkedList.size()];
        contactsToEvaluateArr = linkedList.toArray(contactsToEvaluateArr);

        return stream(contactsToEvaluateArr).filter(
                contact -> (
                        (contact.getGivenName().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getSurname().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getEmail().toLowerCase().contains(keyword.toLowerCase()) ||
                                contact.getPhone().toString().equals(keyword) ||
                                contact.getSource().toLowerCase().contains(keyword.toLowerCase()))
                )).collect(Collectors.toList());
    }

    @After
    public void tearDown() {
        driver.close();
    }

    @Given("^Access to url the duplicate free page$")
    public void accessToUrlTheDuplicateFreePage() {
        driver.get(IP + "duplicateFree.html");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleIs("Duplicate Free"));
        assertEquals("Duplicate Free", driver.getTitle());
    }

    private boolean conditionDuplicates(Contact i, Contact j) {
        if (i.getEmail().equals(j.getEmail())) {
            return true;
        }

        if (i.getPhone().equals(j.getPhone())) {
            return true;
        }

        if (i.getSurname().equals(j.getSurname()) && i.getGivenName().equals(j.getGivenName())) {
            return true;
        }
        return false;
    }

    private void retrieveDuplicateArray() {
        deletedContacts = new LinkedList<>();
        //For each position
        for (int i = 0; i < contacts.length; i++) {
            //For each position next to the position declared behind
            for (int j = i + 1; j < contacts.length; j++) {
                //Are these "equal" ?
                if (conditionDuplicates(contacts[i], contacts[j])) {
                    //Is this already inside of the array?
                    if (!deletedContacts.contains(contacts[i])) {
                        deletedContacts.add(contacts[i]);
                    }
                    if (!deletedContacts.contains(contacts[j])) {
                        deletedContacts.add(contacts[j]);
                        j = i = 0;
                    }
                }
            }
        }
    }

    @And("^I random select values$")
    public void iRandomSelectValues() {

        WebDriverWait wait = new WebDriverWait(driver, 6);
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//section[1]/form/table"), 0));

        retrieveDuplicateArray();

        removedFromTableContacts = new LinkedList<>();

        List<WebElement> numberOfRows = driver.findElements(By.className("py-1"));
        if (!numberOfRows.isEmpty()) {
            assertEquals(numberOfRows.size(), deletedContacts.size());

            List<WebElement> col = null;
            int position;
            for (int coll = 0; coll < numberOfRows.size(); coll++) {

                //get col of the specific contact
                position = (Math.random() <= 0.5) ? 1 : 2;
                col = numberOfRows.get(coll).findElements(By.xpath("td"));
                col.get(col.size() - position).findElement(By.xpath("div")).click();

                //This means we are declining a contact. Add it to the contact List.
                if (position == 1) {
                    //Get possible positions of this contact
                    removedFromTableContacts.add(col.get(0).findElement(By.xpath("input")).getAttribute("value"));
                }
            }
        } else {
            fail("XPath errado");
        }
    }

    @And("^I click on APLICAR button$")
    public void iClickOnAPLICARButton() {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//section[1]/form/table"), 0));
        WebElement button = driver.findElement(By.xpath(".//button[@type='submit']"));
        button.click();
    }

    @And("^I should be to in the \"([^\"]*)\" Page$")
    public void iShouldBeToInThePage(String string) {
        // Write code here that turns the phrase above into concrete actions
        assertEquals(driver.getTitle(), string);

        WebDriverWait wait = new WebDriverWait(driver, 6);
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//table[@id='Contacts']/tbody/tr"), 0));

        List<WebElement> elements = driver.findElements(By.xpath(".//div[@id='Contacts_info']"));
        if (!elements.isEmpty()) {

            List<String> chunks = new LinkedList<>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(driver.findElement(By.xpath(".//div[@id='Contacts_info']")).getText());
            while (matcher.find()) {
                chunks.add(matcher.group());
            }
            if (chunks.isEmpty()) {
                fail("chunks came empty. Verify if the XPath is correct");
            } else {
                assertEquals(Integer.parseInt(chunks.get(chunks.size() - 1)), contacts.length - removedFromTableContacts.size());
            }
        } else {
            fail("Wrong XPath");
        }
    }

    @And("^the title of page should be \"([^\"]*)\"$")
    public void theTitleOfPageShouldBe(String title) {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }

    @Then("^See if table is populated$")
    public void seeIfTableIsPopulated() {
        //wait until...
        WebDriverWait wait = new WebDriverWait(driver, 6);

        // check if exist table
//        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//table[@id='Contacts']/tbody/tr"), 0));
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//table[@id='Contacts']/tbody/tr")));
    }

    @Given("^I Access to duplicates url$")
    public void iAccessToDuplicatesUrl() {
        driver.get(IP +"duplicates.html");
        WebDriverWait wait = new WebDriverWait(driver, 3);

        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//section[1]/form/table"), 0));
        assertEquals ("Contactos Duplicados", driver.getTitle());
    }

    @And("^I should search for \"([^\"]*)\"$")
    public void iShouldSearchFor(String search) throws Throwable {
        //XPath to the correct position
        String xpath = ".//div[@id='Contacts_filter']/label/input";

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromSearch = driver.findElements(By.xpath(xpath));

        if (!valuesFromSearch.isEmpty()){
            //Write on the search bar
            valuesFromSearch.get(0).sendKeys(search);
        }else{
            fail("Wrong XPath");
        }
    }

    @Then("^Is table returning the correct tables, related to \"([^\"]*)\"$")
    public void isTableReturningTheCorrectTablesRelatedTo(String search) throws InterruptedException {

        LinkedList<Contact> filterContacts = new LinkedList<>(Arrays.asList(contacts));

        //Lets remove the values that were declined previously
        for (int i = 0; i < removedFromTableContacts.size(); i++){
            int finalI = i;
            filterContacts.remove(stream(contacts).filter(
                    contact -> (
                            (contact.getGuid().equals(removedFromTableContacts.get(finalI)))
                    )).collect(Collectors.toList()).get(0));
        }

        // check number of results in table after filter in input search
        List<String> chunks = new LinkedList<>();
        Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(driver.findElement(By.xpath(".//div[@id='Contacts_info']")).getText());
        while (matcher.find()) {
            chunks.add( matcher.group() );
        }
        if(!chunks.isEmpty()){

            //Filter the database with the keyword
            filterContacts = new LinkedList<>(filterContact(search, filterContacts));

            //If its equal to 0, then we need to see if only one row appears
            if(Integer.parseInt(chunks.get(chunks.size() - 2)) == 0){
                assertEquals(filterContacts.size(), 0);
            }else{
                assertEquals(filterContacts.size(), Integer.parseInt(chunks.get(chunks.size() - 2)));

                List<WebElement> list = driver.findElements(By.xpath(".//table[@id='Contacts']/tbody/tr"));

                if(!list.isEmpty()){
                    for(int i = 0; i <= 5 && i < Integer.parseInt(chunks.get(chunks.size() - 2)); i++ ){

                        List<WebElement> tds = list.get(i).findElements(By.xpath("td"));
                        boolean hasResult = false;
                        for (WebElement td : tds) {
                            if (td.getText().toLowerCase().contains(search.toLowerCase())) {
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
            }
        }else{
            fail("chunks came empty. Verify if the XPath is correct");
        }
    }
}