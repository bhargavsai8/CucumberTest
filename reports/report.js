$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/cuc/qa/CucumberTest/main.feature");
formatter.feature({
  "line": 1,
  "name": "Go to Youtube from Google",
  "description": "",
  "id": "go-to-youtube-from-google",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to Youtube from Google",
  "description": "",
  "id": "go-to-youtube-from-google;navigate-to-youtube-from-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens google website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches for youtube",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on youtube link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user searches for a youtube video",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the video",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Main_StepDef.user_opens_google_website()"
});
formatter.result({
  "duration": 7555442716,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_searches_for_youtube()"
});
formatter.result({
  "duration": 1721865531,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_youtube_link()"
});
formatter.result({
  "duration": 3116097437,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_searches_for_a_youtube_video()"
});
formatter.result({
  "duration": 3721777975,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.user_clicks_on_the_video()"
});
formatter.result({
  "duration": 202921958,
  "status": "passed"
});
formatter.match({
  "location": "Main_StepDef.closes_the_browser()"
});
formatter.result({
  "duration": 1323694510,
  "status": "passed"
});
});