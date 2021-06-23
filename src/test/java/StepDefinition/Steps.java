package StepDefinition;


import java.util.List;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Verify;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.testRunner.createElement;
import net.bytebuddy.utility.visitor.ExceptionTableSensitiveMethodVisitor;

public class Steps extends createElement{
	public Steps() {
		super();
	}

	
	@Given("^Open the Chrome and launch the application$")
	public void open_the_Chrome_and_launch_the_application() throws Throwable {
		driver.navigate().to(url);
	}

	
	@When("^enter \"([^\"]*)\" item in the input box$")
	public void enter_item_in_the_input_box(String toDoItem) throws Throwable {
		getControlObject(addToDo).click();
		getControlObject(addToDo).sendKeys(toDoItem + Keys.ENTER);
	}

	@Then("^I see \"([^\"]*)\" is visible in ([^\\\"]*) list$")
	public void see_under_the_rememeber_list(String expectedToDoItem,String activeList) throws Throwable {
//		List<WebElement> toDoLists=getControlObjectList(toDoList);
		Verify.verify(isItemPresentInToDoList(getControlObjectList(toDoList),expectedToDoItem),"The ToDo item does not added correctly");
	}

	@Then("^I see item left count shows (\\d+) Item$")
	public void see_item_left_shows_Item(int itemLeftCount) throws Throwable {
		Verify.verify((getControlObject(itemLeft$).getText().contentEquals(String.valueOf(itemLeftCount))),"The item left count does not matched.");
	}

	@Then("^see presence of checkbox against the \"([^\"]*)\"$")
	public void see_checkbox_against_the(String toDoItem) throws Throwable {
		Verify.verify(getControlObject(getCheckbox(toDoItem)).isEnabled(),"The ToDo item checkbox does not displayed.");
		
	}

	@Then("^([^\\\"]*) hyperlink is visible and selected$")
	public void see_All_hyperlink_visible_and_selected(String linkName) throws Throwable {
		Verify.verify(getControlObject(getToDoListTab(linkName)).isDisplayed(),"The hyperlink '"+linkName+"' does not displayed.");
		Verify.verify(getControlObject(getToDoListTab(linkName)).getAttribute("class").contentEquals("selected"),"The hyperlink '"+linkName+"' should be selected by default.");

	}

	@Then("^([^\\\"]*) hyperlink is visible and not selected$")
	public void see_Active_hyperlink_visible_and_not_selected(String linkName) throws Throwable {
		Verify.verify(getControlObject(getToDoListTab(linkName)).isDisplayed(),"The hyperlink '"+linkName+"' does not displayed.");
		Verify.verify(!getControlObject(getToDoListTab(linkName)).getAttribute("class").contentEquals("selected"),"The hyperlink '"+linkName+"' should not be selected by default.");

	}	
	
	@Then("^Clear completed link is visible and not selected$")
	public void clear_completed_link_visible_and_not_selected() throws Throwable {
		Verify.verify(getControlObject(clearCompletedLink).isDisplayed(),"The hyperlink 'Clear Completed' does not displayed.");
		Verify.verify(!getControlObject(clearCompletedLink).getAttribute("class").contentEquals("selected"),"The hyperlink 'Clear Completed' should not be selected by default.");

	}
	
	@Then("^I click on Clear completed link$")
	public void clear_completed_link_selected() throws Throwable {
		getControlObject(clearCompletedLink).click();;

	}
	
	@When("^I mouse hover to \"([^\"]*)\"$")
	public void i_mouse_hover_to(String toDoItem) throws Throwable {
		WebElement toDoElement=getControlObjectList(getToDoItem(toDoItem)).get(0);
		Actions act=new Actions(driver);
		Action performMousehover=act.moveToElement(toDoElement).build();
		performMousehover.perform();
		
	}
	
	@Then("^I see X icon is visible for \"([^\"]*)\"$")
	public void i_see_X_icon_is_visible_for(String toDoItem) throws Throwable {
		Verify.verify(getControlObject(getXforTodoItem(toDoItem)).isDisplayed());
	}
	
	@When("^move mouse pointer away from \"([^\"]*)\"$")
	public void remove_mouse_pointer_from(String toDoItem) throws Throwable {
		getControlObject(addToDo).click();
	}
	
	@Then("^I see X icon disappears from \"([^\"]*)\"$")
	public void i_see_X_icon_disappears_from(String toDoItem) throws Throwable {
		Verify.verify(!getControlObject(getXforTodoItem(toDoItem)).isDisplayed(),"X icon visibility issue.");
	}
	
	@When("^I click on X for \"([^\"]*)\"$")
	public void i_click_on_X_for(String toDoItem) throws Throwable {
		i_mouse_hover_to(toDoItem);
		getControlObject(getXforTodoItem(toDoItem)).click();
	}
	
	@Then("^\"([^\"]*)\" cannot be seen on ([^\\\"]*) list$")
	public void deleted_from_the_ToDo_list(String expectedToDoItem,String activeList) throws Throwable {
//		List<WebElement> toDoLists=getControlObjectList(toDoList);
		Verify.verify(!isItemPresentInToDoList(getControlObjectList(toDoList),expectedToDoItem),"The item still exists in the ToDo list after delete");
	}
	
	@Given("^ToDo items are displayed correctly$")
	public void todo_items_are_displayed_correctly_under_All(DataTable toDoList) throws Throwable {
		for(List<String> getRow:toDoList.raw()) {
			for(String getCell:getRow) {
				see_under_the_rememeber_list(getCell.trim(),"All");	
			}
		}		
	}
	
	@When("^I select \"([^\"]*)\" checkbox$")
	public void i_select_checkbox(String selectToDoItem) throws Throwable {
		Verify.verify(getControlObject(getCheckboxStatus(selectToDoItem)).getAttribute("class").contentEquals("todo"));
		Verify.verify(!getControlObject(getCheckboxStatus(selectToDoItem)).getAttribute("class").contentEquals("todo completed"));
		getControlObject(getCheckbox(selectToDoItem)).click();
	}
	
	@Then("^\"([^\"]*)\" will be strikethrough$")
	public void will_be_strikethrough(String selectToDoItem) throws Throwable {
		Verify.verify(!getControlObject(getCheckboxStatus(selectToDoItem)).getAttribute("class").contentEquals("todo"));
		Verify.verify(getControlObject(getCheckboxStatus(selectToDoItem)).getAttribute("class").contentEquals("todo completed"));	   
	}
	
	@When("^I navigate to ([^\\\"]*) todo list$")
	public void navigate_to_todo_list(String linkName) throws Throwable {
		getControlObject(getToDoListTab(linkName)).click();
	}
	
	@Given("^I see TODO MVC app$")
	public void todo_MVC_app_should_be_launched_already() throws Throwable {
		Verify.verify(getControlObject(todosHomePage).isDisplayed(),"The TODO MVC app opened already.");
	}

	@When("^I double click on \"([^\"]*)\"$")
	public void double_click_on_todo_list(String toDoItem) throws Throwable {
		Actions act=new Actions(driver);
		act.doubleClick(getControlObject(getToDoItem(toDoItem))).build().perform();

	}
	
	@When("^Modify to \"([^\"]*)\"$")
	public void modify_todos(String newToDoItem) throws Throwable {
		Actions act=new Actions(driver);
		act.doubleClick(getControlObject(editToDos)).doubleClick().build().perform();
		getControlObject(editToDos).sendKeys(Keys.BACK_SPACE);
		WebDriverWait wait=new WebDriverWait(driver,1000);
		wait.until(ExpectedConditions.textToBe(editToDos, ""));
		getControlObject(editToDos).sendKeys(newToDoItem + Keys.ENTER);
	}
}
