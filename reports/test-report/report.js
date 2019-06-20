$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Website.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "on click button \"ver mais\" on table should be go details contact",
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
  "name": "I click button \"ver mais\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Should be go details page and show the details of contact by request \"guid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.shouldBeGoDetailsPageAndShowTheDetailsOfContactByRequest(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});