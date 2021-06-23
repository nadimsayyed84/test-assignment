Feature: In order to remember the things I want to do, as a ToDo MVC user,I want to manage my todo list



Scenario Outline: Todo input accepts numeric,string,alphanumeric,special charachter
Given Open the Chrome and launch the application
When enter "<todos>" item in the input box
Then I see "<todos>" is visible in All Todo list
Examples:
|todos|
|12345|
|SINGTEL|
|SINGTEL12345|
|$%^&%*&^!@|


Scenario Outline: Add ToDo item
Given I see TODO MVC app		
When enter "<Todos>" item in the input box
Then I see "<Todos>" is visible in All Todo list
And  I see item left count shows 5 Item
And  see presence of checkbox against the "<Todos>"
And  All hyperlink is visible and selected
And  Active hyperlink is visible and not selected
And  Completed hyperlink is visible and not selected	
Examples:
|Todos|
|MVC Data|


Scenario Outline: Behaviour of X icon over ToDos
Given I see TODO MVC app
When enter "<Todos>" item in the input box
Then I see "<Todos>" is visible in the list
And I see item left count shows 6 Item
When I mouse hover to "<Todos>"
Then I see X icon is visible for "<Todos>"
When move mouse pointer away from "<Todos>"
Then I see X icon disappears from "<Todos>"
When I click on X for "<Todos>"
Then "<Todos>" cannot be seen on All todo list
And I see item left count shows 5 Item
Examples:
|Todos|
|Sample|


Scenario Outline: Verify Active, Completed and Clear completed features
Given I see TODO MVC app
When I select "<item1>" checkbox
Then "<item1>" will be strikethrough
And  Clear completed link is visible and not selected
And  I see item left count shows 4 Item
When I navigate to Active todo list
Then I see "<item2>" is visible in Active todo list
And  "<item1>" cannot be seen on Active todo list
When I navigate to Completed todo list
Then I see "<item1>" is visible in Completed todo list 
And  "<item2>" cannot be seen on Completed todo list
When I click on Clear completed link
And  I navigate to Completed todo list
Then "<item1>" cannot be seen on Completed todo list
Examples:
|item1|item2|
|MVC Data|SINGTEL|


Scenario Outline: Edit existing Todo item
Given I see TODO MVC app			
When enter "<item1>" item in the input box
Then I navigate to All todo list
And I see "<item1>" is visible in the list
When I double click on "<item1>"
And Modify to "<EditedItem>"
Then I see "<EditedItem>" is visible in All todo list
When I navigate to Active todo list
Then I see "<EditedItem>" is visible in Active todo list
Examples:
|item1|EditedItem|
|MVC Data|Edited MVC Data|

