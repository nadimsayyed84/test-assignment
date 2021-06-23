$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/myTest.feature");
formatter.feature({
  "line": 1,
  "name": "In order to remember the things I want to do, as a ToDo MVC user,I want to manage my todo list",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Todo input accepts numeric,string,alphanumeric,special charachter",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \"\u003ctodos\u003e\" item in the input box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see \"\u003ctodos\u003e\" is visible in All Todo list",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;",
  "rows": [
    {
      "cells": [
        "todos"
      ],
      "line": 10,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;1"
    },
    {
      "cells": [
        "12345"
      ],
      "line": 11,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;2"
    },
    {
      "cells": [
        "SINGTEL"
      ],
      "line": 12,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;3"
    },
    {
      "cells": [
        "SINGTEL12345"
      ],
      "line": 13,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;4"
    },
    {
      "cells": [
        "$%^\u0026%*\u0026^!@"
      ],
      "line": 14,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Todo input accepts numeric,string,alphanumeric,special charachter",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \"12345\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see \"12345\" is visible in All Todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 5424556613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 288281359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 7
    },
    {
      "val": "All Todo",
      "offset": 28
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 30635224,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Todo input accepts numeric,string,alphanumeric,special charachter",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \"SINGTEL\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see \"SINGTEL\" is visible in All Todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 198237224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 155274614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL",
      "offset": 7
    },
    {
      "val": "All Todo",
      "offset": 30
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 44681745,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Todo input accepts numeric,string,alphanumeric,special charachter",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \"SINGTEL12345\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see \"SINGTEL12345\" is visible in All Todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 143759271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL12345",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 237407394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL12345",
      "offset": 7
    },
    {
      "val": "All Todo",
      "offset": 35
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 70501352,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Todo input accepts numeric,string,alphanumeric,special charachter",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;todo-input-accepts-numeric,string,alphanumeric,special-charachter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \"$%^\u0026%*\u0026^!@\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see \"$%^\u0026%*\u0026^!@\" is visible in All Todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 126252223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$%^\u0026%*\u0026^!@",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 143118895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$%^\u0026%*\u0026^!@",
      "offset": 7
    },
    {
      "val": "All Todo",
      "offset": 33
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 58808914,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add ToDo item",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;add-todo-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "enter \"\u003cTodos\u003e\" item in the input box",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I see \"\u003cTodos\u003e\" is visible in All Todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see item left count shows 5 Item",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "see presence of checkbox against the \"\u003cTodos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "All hyperlink is visible and selected",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Active hyperlink is visible and not selected",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Completed hyperlink is visible and not selected",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;add-todo-item;",
  "rows": [
    {
      "cells": [
        "Todos"
      ],
      "line": 27,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;add-todo-item;;1"
    },
    {
      "cells": [
        "MVC Data"
      ],
      "line": 28,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;add-todo-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Add ToDo item",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;add-todo-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "enter \"MVC Data\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I see \"MVC Data\" is visible in All Todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see item left count shows 5 Item",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "see presence of checkbox against the \"MVC Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "All hyperlink is visible and selected",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Active hyperlink is visible and not selected",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Completed hyperlink is visible and not selected",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.todo_MVC_app_should_be_launched_already()"
});
formatter.result({
  "duration": 40280696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 98345943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 7
    },
    {
      "val": "All Todo",
      "offset": 31
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 54977236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 28
    }
  ],
  "location": "Steps.see_item_left_shows_Item(int)"
});
formatter.result({
  "duration": 21635479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 38
    }
  ],
  "location": "Steps.see_checkbox_against_the(String)"
});
formatter.result({
  "duration": 17921188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 0
    }
  ],
  "location": "Steps.see_All_hyperlink_visible_and_selected(String)"
});
formatter.result({
  "duration": 47189444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 0
    }
  ],
  "location": "Steps.see_Active_hyperlink_visible_and_not_selected(String)"
});
formatter.result({
  "duration": 40867133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completed",
      "offset": 0
    }
  ],
  "location": "Steps.see_Active_hyperlink_visible_and_not_selected(String)"
});
formatter.result({
  "duration": 43130675,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Behaviour of X icon over ToDos",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;behaviour-of-x-icon-over-todos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "enter \"\u003cTodos\u003e\" item in the input box",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I see \"\u003cTodos\u003e\" is visible in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I see item left count shows 6 Item",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I mouse hover to \"\u003cTodos\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see X icon is visible for \"\u003cTodos\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "move mouse pointer away from \"\u003cTodos\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see X icon disappears from \"\u003cTodos\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on X for \"\u003cTodos\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "\"\u003cTodos\u003e\" cannot be seen on All todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I see item left count shows 5 Item",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;behaviour-of-x-icon-over-todos;",
  "rows": [
    {
      "cells": [
        "Todos"
      ],
      "line": 44,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;behaviour-of-x-icon-over-todos;;1"
    },
    {
      "cells": [
        "Sample"
      ],
      "line": 45,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;behaviour-of-x-icon-over-todos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Behaviour of X icon over ToDos",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;behaviour-of-x-icon-over-todos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "enter \"Sample\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I see \"Sample\" is visible in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I see item left count shows 6 Item",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I mouse hover to \"Sample\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see X icon is visible for \"Sample\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "move mouse pointer away from \"Sample\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see X icon disappears from \"Sample\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on X for \"Sample\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "\"Sample\" cannot be seen on All todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I see item left count shows 5 Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.todo_MVC_app_should_be_launched_already()"
});
formatter.result({
  "duration": 18959238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 71311504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 7
    },
    {
      "val": "the",
      "offset": 29
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 55935055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 28
    }
  ],
  "location": "Steps.see_item_left_shows_Item(int)"
});
formatter.result({
  "duration": 18121446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 18
    }
  ],
  "location": "Steps.i_mouse_hover_to(String)"
});
formatter.result({
  "duration": 134763221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 29
    }
  ],
  "location": "Steps.i_see_X_icon_is_visible_for(String)"
});
formatter.result({
  "duration": 24677756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 30
    }
  ],
  "location": "Steps.remove_mouse_pointer_from(String)"
});
formatter.result({
  "duration": 30887756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 30
    }
  ],
  "location": "Steps.i_see_X_icon_disappears_from(String)"
});
formatter.result({
  "duration": 18943578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 18
    }
  ],
  "location": "Steps.i_click_on_X_for(String)"
});
formatter.result({
  "duration": 170193399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 1
    },
    {
      "val": "All todo",
      "offset": 27
    }
  ],
  "location": "Steps.deleted_from_the_ToDo_list(String,String)"
});
formatter.result({
  "duration": 51233851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 28
    }
  ],
  "location": "Steps.see_item_left_shows_Item(int)"
});
formatter.result({
  "duration": 13335990,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Verify Active, Completed and Clear completed features",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;verify-active,-completed-and-clear-completed-features",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I select \"\u003citem1\u003e\" checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "\"\u003citem1\u003e\" will be strikethrough",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Clear completed link is visible and not selected",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I see item left count shows 4 Item",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I navigate to Active todo list",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I see \"\u003citem2\u003e\" is visible in Active todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "\"\u003citem1\u003e\" cannot be seen on Active todo list",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I navigate to Completed todo list",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I see \"\u003citem1\u003e\" is visible in Completed todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "\"\u003citem2\u003e\" cannot be seen on Completed todo list",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Clear completed link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I navigate to Completed todo list",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "\"\u003citem1\u003e\" cannot be seen on Completed todo list",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;verify-active,-completed-and-clear-completed-features;",
  "rows": [
    {
      "cells": [
        "item1",
        "item2"
      ],
      "line": 64,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;verify-active,-completed-and-clear-completed-features;;1"
    },
    {
      "cells": [
        "MVC Data",
        "SINGTEL"
      ],
      "line": 65,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;verify-active,-completed-and-clear-completed-features;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "Verify Active, Completed and Clear completed features",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;verify-active,-completed-and-clear-completed-features;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I select \"MVC Data\" checkbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "\"MVC Data\" will be strikethrough",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Clear completed link is visible and not selected",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I see item left count shows 4 Item",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I navigate to Active todo list",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I see \"SINGTEL\" is visible in Active todo list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "\"MVC Data\" cannot be seen on Active todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I navigate to Completed todo list",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I see \"MVC Data\" is visible in Completed todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "\"SINGTEL\" cannot be seen on Completed todo list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Clear completed link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I navigate to Completed todo list",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "\"MVC Data\" cannot be seen on Completed todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.todo_MVC_app_should_be_launched_already()"
});
formatter.result({
  "duration": 20976127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 10
    }
  ],
  "location": "Steps.i_select_checkbox(String)"
});
formatter.result({
  "duration": 64696652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 1
    }
  ],
  "location": "Steps.will_be_strikethrough(String)"
});
formatter.result({
  "duration": 31475140,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clear_completed_link_visible_and_not_selected()"
});
formatter.result({
  "duration": 47305823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 28
    }
  ],
  "location": "Steps.see_item_left_shows_Item(int)"
});
formatter.result({
  "duration": 15614532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 14
    }
  ],
  "location": "Steps.navigate_to_todo_list(String)"
});
formatter.result({
  "duration": 51658532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL",
      "offset": 7
    },
    {
      "val": "Active todo",
      "offset": 30
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 26785344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 1
    },
    {
      "val": "Active todo",
      "offset": 29
    }
  ],
  "location": "Steps.deleted_from_the_ToDo_list(String,String)"
});
formatter.result({
  "duration": 30101322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completed",
      "offset": 14
    }
  ],
  "location": "Steps.navigate_to_todo_list(String)"
});
formatter.result({
  "duration": 42059103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 7
    },
    {
      "val": "Completed todo",
      "offset": 31
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 22816029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SINGTEL",
      "offset": 1
    },
    {
      "val": "Completed todo",
      "offset": 28
    }
  ],
  "location": "Steps.deleted_from_the_ToDo_list(String,String)"
});
formatter.result({
  "duration": 15882018,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clear_completed_link_selected()"
});
formatter.result({
  "duration": 33663050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completed",
      "offset": 14
    }
  ],
  "location": "Steps.navigate_to_todo_list(String)"
});
formatter.result({
  "duration": 35485687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 1
    },
    {
      "val": "Completed todo",
      "offset": 29
    }
  ],
  "location": "Steps.deleted_from_the_ToDo_list(String,String)"
});
formatter.result({
  "duration": 9689860,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Edit existing Todo item",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;edit-existing-todo-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "enter \"\u003citem1\u003e\" item in the input box",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I navigate to All todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I see \"\u003citem1\u003e\" is visible in the list",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I double click on \"\u003citem1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "Modify to \"\u003cEditedItem\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I see \"\u003cEditedItem\u003e\" is visible in All todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I navigate to Active todo list",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I see \"\u003cEditedItem\u003e\" is visible in Active todo list",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;edit-existing-todo-item;",
  "rows": [
    {
      "cells": [
        "item1",
        "EditedItem"
      ],
      "line": 79,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;edit-existing-todo-item;;1"
    },
    {
      "cells": [
        "MVC Data",
        "Edited MVC Data"
      ],
      "line": 80,
      "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;edit-existing-todo-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Edit existing Todo item",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,i-want-to-manage-my-todo-list;edit-existing-todo-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I see TODO MVC app",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "enter \"MVC Data\" item in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I navigate to All todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I see \"MVC Data\" is visible in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I double click on \"MVC Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "Modify to \"Edited MVC Data\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I see \"Edited MVC Data\" is visible in All todo list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I navigate to Active todo list",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I see \"Edited MVC Data\" is visible in Active todo list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.todo_MVC_app_should_be_launched_already()"
});
formatter.result({
  "duration": 16358114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 7
    }
  ],
  "location": "Steps.enter_item_in_the_input_box(String)"
});
formatter.result({
  "duration": 68847893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 14
    }
  ],
  "location": "Steps.navigate_to_todo_list(String)"
});
formatter.result({
  "duration": 49638548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 7
    },
    {
      "val": "the",
      "offset": 31
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 74018489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVC Data",
      "offset": 19
    }
  ],
  "location": "Steps.double_click_on_todo_list(String)"
});
formatter.result({
  "duration": 133359944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edited MVC Data",
      "offset": 11
    }
  ],
  "location": "Steps.modify_todos(String)"
});
formatter.result({
  "duration": 298777455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edited MVC Data",
      "offset": 7
    },
    {
      "val": "All todo",
      "offset": 38
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 37876899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 14
    }
  ],
  "location": "Steps.navigate_to_todo_list(String)"
});
formatter.result({
  "duration": 59476778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edited MVC Data",
      "offset": 7
    },
    {
      "val": "Active todo",
      "offset": 38
    }
  ],
  "location": "Steps.see_under_the_rememeber_list(String,String)"
});
formatter.result({
  "duration": 42545267,
  "status": "passed"
});
});