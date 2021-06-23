package io.cucumber.testRunner;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;



public class createElement {
	protected static WebDriver driver;
	public static String url;
	public By addToDo;
	public By toDoList;
	public By itemLeft$;
	public By toDoListTab;
	public By todosHomePage;
	public By editToDos;
	public By clearCompletedLink;
	static {
			System.setProperty("webdriver.chrome.driver", "/Users/a747428/Downloads/chromedriver");
			driver=new  ChromeDriver();
			url= "http://todomvc.com/examples/vue/";
	}
	
	public createElement(){
		addToDo=By.className("new-todo");
		toDoList=By.cssSelector(".todo-list label");
		itemLeft$=By.cssSelector(".todo-count strong");
		todosHomePage=By.xpath("//header/*[text()='todos']");
		editToDos=By.xpath("//li[@class='todo editing']/input");
		clearCompletedLink=By.cssSelector(".clear-completed");
	}
	
	public By getToDoListTab(String linkName) {
		return By.linkText(linkName);
	}
	
	public By getToDoItem(String itemDescription) {
		return By.xpath("//ul[@class='todo-list']//label[text()='"+itemDescription+"']");
	}
	
	public By getXforTodoItem(String toDoItem) {
		return By.xpath("//ul[@class='todo-list']//label[text()='"+toDoItem+"']/following-sibling::button");
	}
	
	public By getCheckbox(String selectToDoItem) {
		return By.xpath("//label[text()='"+selectToDoItem+"']/preceding-sibling::input");
	}
	
	public By getCheckboxStatus(String givenCheckbox) {
		return By.xpath("//label[text()='"+givenCheckbox+"']/ancestor::li");
	}
	
	public By getToDosHomePage(String givenCheckbox) {
		return By.xpath("//label[text()='"+givenCheckbox+"']/ancestor::li");
	}
	
	public WebElement getControlObject(By controlObjProperty) {
		return driver.findElement(controlObjProperty);
	}
	
	public List<WebElement> getControlObjectList(By controlObjProperty) {
		return driver.findElements(controlObjProperty);
	}
	
	public boolean isItemPresentInToDoList(List<WebElement> toDoList,String expectedToDoItem) {
		boolean flag=false;
		for(WebElement fetchItems:toDoList) {
			if(fetchItems.getText().contentEquals(expectedToDoItem)) {
				flag=true;
				break;
			}
		}
		return flag;
	}
	
}
