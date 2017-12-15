Feature: Go to Youtube from Google

#data driven testing without examples keyword
Scenario: Navigate to Youtube from Google

Given user opens google website
Then user searches for youtube
Then user clicks on youtube link 
Then user searches for "bahubali" youtube video
And user clicks on the video
And closes the browser

#data driven testing with examples keyword
Scenario Outline: User prints the Title of the Pageq

Given user opens google website
Then user searches for youtube
Then user clicks on youtube link 
Then user searches for "<videoname>" youtube video
Then user gets the title of the page
And closes the browser

Examples:
|videoname|
|han solo|
|indiana joneS|