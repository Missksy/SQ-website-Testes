$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Website.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test if data is correctly inputed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.step({
  "name": "check if in random position the values are correctly \"\u003cPosition\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Position"
      ]
    },
    {
      "cells": [
        "First"
      ]
    },
    {
      "cells": [
        "Middle"
      ]
    },
    {
      "cells": [
        "Last"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test if data is correctly inputed",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "check if in random position the values are correctly \"First\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.checkIfInRandomPositionTheValuesAreCorrectly(String)"
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
  "keyword": "Scenario Outline"
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
  "name": "check if in random position the values are correctly \"Middle\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.checkIfInRandomPositionTheValuesAreCorrectly(String)"
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
  "keyword": "Scenario Outline"
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
  "name": "check if in random position the values are correctly \"Last\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.checkIfInRandomPositionTheValuesAreCorrectly(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});