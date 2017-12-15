package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\main\\java\\Features\\main.feature" //path of feature files
,glue={"stepDefinitions"}, format = { "pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit_xml/cucumber.xml"} //glue means path of step defintion files 
//, dryRun=true 								 //dryrun will check if for every feature step there is a step defintion mapping
, monochrome =true 
, strict = true)							//monochrome displays output in proper format
												//json: will generate json file
												//junit: will generate junit file
												//strict will check if step definitions are written for every feature step
public class MainRunner {

	
}
