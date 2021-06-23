package io.cucumber.testRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;		
import cucumber.api.CucumberOptions;		
import cucumber.api.junit.Cucumber;		

@RunWith(Cucumber.class)				
@CucumberOptions(features="feature/myTest.feature",glue={"StepDefinition"},
plugin= {"pretty","html:test-output", "json:json-output/cucumber.json","junit:junit-xml-output/cucumber.xml"},
tags= {"~@regressionTest"})	


public class RunnerTest extends createElement{

	@AfterClass
	public static void teardown() {
		driver.quit();
	}
	
}

