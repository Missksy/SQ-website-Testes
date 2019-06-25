$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DuplicatesWebsite.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page Duplicates",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page for to see duplicate contacts\n  So that I can see the list of the contacts duplicates",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "On submit form, AlertBox should appear",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.accessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the APPLICAR button",
  "keyword": "When "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.iClickTheAPPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an alertBox, with the text \"At least one group is blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.iShouldSeeAnAlertBoxWithTheText(String)"
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
formatter.after({
  "status": "passed"
});
});