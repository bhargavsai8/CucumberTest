package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Main_StepDef {
	
	WebDriver driver = null;
	
	@Given("^user opens google website$")
	public void user_opens_google_website()
	{
		System.setProperty("webdriver.chrome.driver",  System.getProperty("user.dir")+"\\chromedriver.exe");
		driver=new ChromeDriver();
		
		driver.get("https://google.com");
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
	}
	
	@Then("^user searches for youtube$")
	public void user_searches_for_youtube()
	{
		driver.findElement(By.id("lst-ib")).sendKeys("youtube");
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
List<WebElement> searchValues = driver.findElements(By.xpath("//li[@role='presentation' and @class='sbsb_c gsfs']"));
		
		
		for(int i =0; i<searchValues.size(); i++)
		{
			
			
			if(searchValues.get(i).getText().equalsIgnoreCase("youtube"))
			{
				searchValues.get(i).click();
				break;
			}
		}
	}
	
	@Then("^user clicks on youtube link$")
	public void user_clicks_on_youtube_link()
	{
		driver.findElement(By.xpath("//a[text()='YouTube']")).click();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
	}
	
	
	@Then("^user searches for \"(.*)\" youtube video$")
	public void user_searches_for_a_youtube_video(String video)
	{
		driver.findElement(By.xpath("//input[@id='search']")).sendKeys(video);
		driver.findElement(By.id("search-icon-legacy")).click();
		
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}
	
	@And("^user clicks on the video$")
	public void user_clicks_on_the_video()
	{
	
		driver.findElement(By.xpath("//a[contains(@aria-label,'Kaun Hain Voh')]")).click();
	}
	
	@Then("^user gets the title of the page$")
	public void user_gets_the_title_of_the_page()
	{
		JavascriptExecutor js = ((JavascriptExecutor)driver);
		String title=js.executeScript("return document.title;").toString();
		System.out.println("The Title of the page = "+title);
		
	}
	
	
	
	@And("^closes the browser$")
	public void closes_the_browser()
	{
		driver.quit();
	}
	
	
	
}
