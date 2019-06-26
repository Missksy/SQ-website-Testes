$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DetailsWebsite.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page Details",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page details contacts\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of detail page should be \"Detalhes de Contacto\"",
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
  "name": "the title of the detail page should be \"Detalhes de Contacto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.theTitleOfTheDetailPageShouldBe(String)"
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
formatter.after({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "On access detail page should be see details contact by guid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url of detail by \"\u003cguid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I should be see details of contact by \"\u003cguid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "guid"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "On access detail page should be see details contact by guid",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact by \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactBy(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On access detail page should be see details contact by guid",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact by \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactBy(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On access detail page should be see details contact by guid",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact by \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactBy(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "On access detail page only show the contacts that is not empty",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url of detail by \"\u003cguid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I should be see details of contact aren\u0027t empty, by \"\u003cguid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "guid"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "On access detail page only show the contacts that is not empty",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact aren\u0027t empty, by \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactArenTEmpty(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On access detail page only show the contacts that is not empty",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact aren\u0027t empty, by \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactArenTEmpty(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On access detail page only show the contacts that is not empty",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see details of contact aren\u0027t empty, by \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.iShouldBeSeeDetailsOfContactArenTEmpty(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "on click button \"voltar à listagem\" should be back to index page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url of detail by \"\u003cguid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on button in details",
  "keyword": "When "
});
formatter.step({
  "name": "the page should be back to index page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "guid"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "on click button \"voltar à listagem\" should be back to index page",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button in details",
  "keyword": "When "
});
formatter.match({
  "location": "DetailsWebsiteDef.iClickOnButtonInDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page should be back to index page",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.thePageShouldBeBackToIndexPage()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "on click button \"voltar à listagem\" should be back to index page",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button in details",
  "keyword": "When "
});
formatter.match({
  "location": "DetailsWebsiteDef.iClickOnButtonInDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page should be back to index page",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.thePageShouldBeBackToIndexPage()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "on click button \"voltar à listagem\" should be back to index page",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button in details",
  "keyword": "When "
});
formatter.match({
  "location": "DetailsWebsiteDef.iClickOnButtonInDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page should be back to index page",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.thePageShouldBeBackToIndexPage()"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test if data of image resize is correctly inputed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url of detail by \"\u003cguid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "check if in a position guid the image is loaded with \"\u003cwidth\u003e\" and \"\u003cheight\u003e\" (\"\u003cguid\u003e\")",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "guid",
        "width",
        "height"
      ]
    },
    {
      "cells": [
        "1",
        "225",
        "255"
      ]
    },
    {
      "cells": [
        "2",
        "225",
        "255"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test if data of image resize is correctly inputed",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if in a position guid the image is loaded with \"225\" and \"255\" (\"1\")",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.checkIfInAPositionGuidTheImageIsLoadedWithAnd(String,String,String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test if data of image resize is correctly inputed",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url of detail by \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DetailsWebsiteDef.accessToUrlOfDetailBy(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if in a position guid the image is loaded with \"225\" and \"255\" (\"2\")",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsWebsiteDef.checkIfInAPositionGuidTheImageIsLoadedWithAnd(String,String,String)"
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
formatter.after({
  "status": "passed"
});
formatter.uri("DuplicatesFreeWebsite.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page in page duplicatesFree",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page on page duplicates\n  So that I can see the list of the contacts  with duplicateFree",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title page should be \"Duplicate Free\"",
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url the duplicate free page",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.accessToUrlTheDuplicateFreePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of page should be \"Duplicate Free\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.theTitleOfPageShouldBe(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title page should be \"Duplicate Free\"",
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Access to url the duplicate free page",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.accessToUrlTheDuplicateFreePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of page should be \"Duplicate Free\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.theTitleOfPageShouldBe(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On submit form, with all information applied, It should redirect me to duplicate free",
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "When "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts",
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See if table is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.seeIfTableIsPopulated()"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.step({
  "name": "I should search for \"\u003csearch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Sophia"
      ]
    },
    {
      "cells": [
        "Lima"
      ]
    },
    {
      "cells": [
        "234914037"
      ]
    },
    {
      "cells": [
        "LinkedIn"
      ]
    },
    {
      "cells": [
        "SophiaPereiraLima@teleworm.us"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"keyword\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"keyword\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"Sophia\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"Sophia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"Lima\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"Lima\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"234914037\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"234914037\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"LinkedIn\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"LinkedIn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if ajax load on duplicateFree contacts and search works",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Access to duplicates url",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iAccessToDuplicatesUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I random select values",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iRandomSelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on APLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iClickOnAPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be to in the \"Duplicate Free\" Page",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldBeToInThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search for \"SophiaPereiraLima@teleworm.us\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.iShouldSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Is table returning the correct tables, related to \"SophiaPereiraLima@teleworm.us\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesFreeWebsiteDef.isTableReturningTheCorrectTablesRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.uri("DuplicatesWebsite.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page Duplicates",
  "description": "    As a user\n    I want to access to the URL address provided for the landing page for to see duplicate contacts\n    So that I can see the list of the contacts duplicates",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Access to duplicate page and check the duplicate values",
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
  "name": "the tables should contains all the duplicate values",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.theTablesShouldContainsAllTheDuplicateValues()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Access to duplicate page and check the duplicate values",
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
  "name": "the tables should contains coherent values on the duplicate table",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.theTablesShouldContainsCoherentValuesOnTheDuplicateTable()"
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
formatter.after({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On submit form, with all information applied, It should redirect me to duplicate free",
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
  "name": "I randomly select values",
  "keyword": "When "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.iRandomlySelectValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the APPLICAR button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.iClickTheAPPLICARButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in the \"Duplicate Free\" Page",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicatesWebsiteDef.iShouldBeInThePage(String)"
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
formatter.after({
  "status": "passed"
});
formatter.uri("Website.feature");
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
formatter.after({
  "status": "passed"
});
formatter.after({
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
formatter.after({
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
formatter.after({
  "status": "passed"
});
formatter.after({
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
formatter.after({
  "status": "passed"
});
formatter.after({
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
  "name": "I click arrow image",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iClickArrowImage()"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.step({
  "name": "the table should be filter by option selected \"\u003cFilter\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Filter"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "Facebook"
      ]
    },
    {
      "cells": [
        "LinkedIn"
      ]
    },
    {
      "cells": [
        "Twitter"
      ]
    },
    {
      "cells": [
        "Skype"
      ]
    }
  ]
});
formatter.scenario({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the table should be filter by option selected \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTableShouldBeFilterByOptionSelected(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the table should be filter by option selected \"Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTableShouldBeFilterByOptionSelected(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the table should be filter by option selected \"LinkedIn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTableShouldBeFilterByOptionSelected(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the table should be filter by option selected \"Twitter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTableShouldBeFilterByOptionSelected(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On select option should filter by source",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the table should be filter by option selected \"Skype\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theTableShouldBeFilterByOptionSelected(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Access to url",
  "keyword": "Given "
});
formatter.step({
  "name": "I search \"\u003ckeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"\u003ckeyword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Sophia"
      ]
    },
    {
      "cells": [
        "Lima"
      ]
    },
    {
      "cells": [
        "234914037"
      ]
    },
    {
      "cells": [
        "LinkedIn"
      ]
    },
    {
      "cells": [
        "SophiaPereiraLima@teleworm.us"
      ]
    }
  ]
});
formatter.scenario({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I search \"Sophia\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"Sophia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I search \"Lima\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"Lima\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I search \"234914037\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"234914037\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I search \"LinkedIn\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"LinkedIn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On search input in page",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I search \"SophiaPereiraLima@teleworm.us\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result on table should be only the values in columns that just searched, related to \"SophiaPereiraLima@teleworm.us\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.theResultOnTableShouldBeOnlyTheValuesInColumnsThatJustSearchedRelatedTo(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "on click button \"ver mais\" on table should be go details contact",
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
  "name": "Should be go details page and show the details of contact by request guid",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.shouldBeGoDetailsPageAndShowTheDetailsOfContactByRequestGuid()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "on click button \"ver duplicados\" on index page",
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
  "name": "I click on button \"ver duplicados\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebsiteDef.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Should be go to duplicates page and show the duplicate contacts",
  "keyword": "Then "
});
formatter.match({
  "location": "WebsiteDef.shouldBeGoToDuplicatesPageAndShowTheDuplicateContacts()"
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
formatter.after({
  "status": "passed"
});
});