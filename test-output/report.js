$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/main.feature");
formatter.feature({
  "line": 1,
  "name": "Go to Youtube from Google",
  "description": "",
  "id": "go-to-youtube-from-google",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#data driven testing without examples keyword"
    }
  ],
  "line": 4,
  "name": "Navigate to Youtube from Google",
  "description": "",
  "id": "go-to-youtube-from-google;navigate-to-youtube-from-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user opens google website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user searches for youtube",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on youtube link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user searches for \"bahubali\" youtube video",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the video",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Main_StepDef.user_opens_google_website()"
});
formatter.result({
  "duration": 12160093404,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_searches_for_youtube()"
});
formatter.result({
  "duration": 1848099488,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_youtube_link()"
});
formatter.result({
  "duration": 3966367096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bahubali",
      "offset": 19
    }
  ],
  "location": "Main_StepDef.user_searches_for_bahubali_youtube_video(String)"
});
formatter.result({
  "duration": 1261193005,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_the_video()"
});
formatter.result({
  "duration": 1106708047,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.closes_the_browser()"
});
formatter.result({
  "duration": 972320432,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#data driven testing with examples keyword"
    }
  ],
  "line": 14,
  "name": "User prints the Title of the Pageq",
  "description": "",
  "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user opens google website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user searches for youtube",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on youtube link",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user searches for \"\u003cvideoname\u003e\" youtube video",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user gets the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;",
  "rows": [
    {
      "cells": [
        "videoname"
      ],
      "line": 24,
      "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;;1"
    },
    {
      "cells": [
        "han solo"
      ],
      "line": 25,
      "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;;2"
    },
    {
      "cells": [
        "indiana joneS"
      ],
      "line": 26,
      "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "User prints the Title of the Pageq",
  "description": "",
  "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user opens google website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user searches for youtube",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on youtube link",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user searches for \"han solo\" youtube video",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user gets the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Main_StepDef.user_opens_google_website()"
});
formatter.result({
  "duration": 7277164568,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_searches_for_youtube()"
});
formatter.result({
  "duration": 1797311910,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_youtube_link()"
});
formatter.result({
  "duration": 3889843507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "han solo",
      "offset": 19
    }
  ],
  "location": "Main_StepDef.user_searches_for_bahubali_youtube_video(String)"
});
formatter.result({
  "duration": 1225979656,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_gets_the_title_of_the_page()"
});
formatter.result({
  "duration": 45597354,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.closes_the_browser()"
});
formatter.result({
  "duration": 858857715,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User prints the Title of the Pageq",
  "description": "",
  "id": "go-to-youtube-from-google;user-prints-the-title-of-the-pageq;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user opens google website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user searches for youtube",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on youtube link",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user searches for \"indiana joneS\" youtube video",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user gets the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Main_StepDef.user_opens_google_website()"
});
formatter.result({
  "duration": 6846793710,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_searches_for_youtube()"
});
formatter.result({
  "duration": 1680086969,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_youtube_link()"
});
formatter.result({
  "duration": 2979777769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indiana joneS",
      "offset": 19
    }
  ],
  "location": "Main_StepDef.user_searches_for_bahubali_youtube_video(String)"
});
formatter.result({
  "duration": 1400193956,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_gets_the_title_of_the_page()"
});
formatter.result({
  "duration": 48354243,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.closes_the_browser()"
});
formatter.result({
  "duration": 924543078,
  "status": "passed"
});
});