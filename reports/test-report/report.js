$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Website.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title page should be \"Contactos\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.match({
  "location": "WebsiteDef.accessToUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of the page should be \"Contactos\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test if ajax load contacts",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.match({
  "location": "WebsiteDef.accessToUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if table is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.checkIfTableIsPopulated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test if data is correctly inputed",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.match({
  "location": "WebsiteDef.accessToUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if in random position the values are correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.checkIfInRandomPositionTheValuesAreCorrectly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "on click button \"arrow image\" should be back to top",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.match({
  "location": "WebsiteDef.accessToUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"arrow image\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iClick(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page should be back to top",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.thePageShouldBeBackToTop()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});