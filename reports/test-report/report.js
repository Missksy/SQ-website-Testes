$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DetailsWebsite.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page Details",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page details contacts\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "On access detail page should be see photo of the contact",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see photo of contact",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeePhotoOfContact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});