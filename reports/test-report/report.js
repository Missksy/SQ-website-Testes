$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Website.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Landing page\u0027s title and text contains \"Welcome to nginx!\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.match({
  "location": "WebsiteDef.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of the page should be \"Welcome to nginx!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the text \"Welcome to nginx!\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebsiteDef.iCanSeeTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});