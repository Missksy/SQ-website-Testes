import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.ComparisonFailure;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class DuplicatesWebsiteDef {
    private static final String IP = "http://130.211.57.242/";
    private WebDriver driver;

    private static Contact[] contacts = null;

    private static LinkedList<Contact> deletedContacts;

    @Before
    public void setUp() {

        if(!System.getProperty("user.dir").contains("jenkins"))
            System.setProperty("webdriver.chrome.driver","drivers/chromedriver.exe");

        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(opt);

        if(contacts == null){
            try {
                contacts  = getInformationFromDatabase();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        deletedContacts = new LinkedList<>();
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

    public boolean conditionDuplicates(Contact i, Contact j) {
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

    public void retrieveDuplicateArray(){
        //For each position
        for(int i = 0; i < contacts.length; i++){
            //For each position next to the position declared behind
            for(int j = i + 1; j < contacts.length;j++) {
                //Are these "equal" ?
                if(conditionDuplicates(contacts[i], contacts[j])){
                    //Is this already inside of the array?
                    if(!deletedContacts.contains(contacts[i])){
                        deletedContacts.add(contacts[i]);
                    }
                    if(!deletedContacts.contains(contacts[j])){
                        deletedContacts.add(contacts[j]);
                        j = i = 0;
                    }
                }
            }
        }
    }

    @After
    public void tearDown() {
        driver.close();
    }


    @Given("^Access to duplicates url$")
    public void accessToDuplicatesUrl() {
        driver.get(IP +"duplicates.html");
        WebDriverWait wait = new WebDriverWait(driver, 3);

        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//section[1]/form/table"), 0));
        assertEquals ("Contactos Duplicados", driver.getTitle());
    }

    @Then("^the tables should contains all the duplicate values$")
    public void theTablesShouldContainsAllTheDuplicateValues() throws InterruptedException {

        retrieveDuplicateArray();

        List<WebElement> numberOfRows = driver.findElements(By.className("py-1"));
        if(!numberOfRows.isEmpty()){
            assertEquals(numberOfRows.size(), deletedContacts.size());
        }else{
            fail("XPath errado");
        }
    }

    @Then("^the tables should contains coherent values on the duplicate table$")
    public void theTablesShouldContainsCoherentValuesOnTheDuplicateTable() {
        retrieveDuplicateArray();

        List<WebElement> numberOfRows = driver.findElements(By.className("py-1"));
        if(!numberOfRows.isEmpty()){
            assertEquals(numberOfRows.size(), deletedContacts.size());
            List<WebElement> row = null;
            for (int position = 0 ; position < numberOfRows.size(); position++) {

                //get row of the specific contact
                row = numberOfRows.get(position).findElements(By.xpath("tr"));
                if(!row.isEmpty()){

                    //for each contact in the deletedContacts list
                    for(int datatablePosition = 0; datatablePosition < deletedContacts.size(); datatablePosition++){
                        try{
                            //Lets see if they are equal. If they aren't, just ignore and go to the next position.
                            assertEquals(row.get(0).getText(), deletedContacts.get(datatablePosition).getGivenName());
                            assertEquals(row.get(1).getText(), deletedContacts.get(datatablePosition).getSurname());
                            assertEquals(row.get(2).getText(), deletedContacts.get(datatablePosition).getEmail());
                            assertEquals(row.get(3).getText(), deletedContacts.get(datatablePosition).getPhone().toString());
                            assertEquals(row.get(4).getText(), deletedContacts.get(datatablePosition).getSource());
                            break;
                        }catch(ComparisonFailure ex){
                            //Ignored
                        }
                    }
                    //If this reaches here, this is an error
                    fail("Error! No contact was found under those parameters");
                }
            }
        }else{
            fail("XPath errado");
        }
    }

    @When("^I click the APPLICAR button$")
    public void iClickTheAPPLICARButton() {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//section[1]/form/table"), 0));
        WebElement button = driver.findElement(By.xpath(".//button[@type='submit']"));
        button.click();
    }

    @Then("^I should see an alertBox, with the text \"([^\"]*)\"$")
    public void iShouldSeeAnAlertBoxWithTheText(String string) throws Throwable {

        WebDriverWait wait = new WebDriverWait(driver, 4);
        wait.until(ExpectedConditions.alertIsPresent());

        Alert alert = driver.switchTo().alert();
        assertEquals(alert.getText(), string);
        alert.dismiss();
    }
}