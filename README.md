App Name: TODO
Description : manage own task
Features :
1. Add Task
Description : Add the task to the list
Controls:
    a. Testbox - form entering the task
    b. Button (Add) - add hte task
Validations:
    a. Textbox/Task name is required
    b. Task size max is 100 chars
    c. We can allow any chars
Actions:
    Button/Add Action:
    a. if I click on the button and if my textbox is blank/empty, then display the required error below the textbox.
    b. if textbox is valid, then check same task not exist in the list.
    c. it he same task is exist show the error as,task is exist below the textbox
    d. Once the task is added into list, we have to clear the textbox value.
2. List Tasks
Description : Display the list of task, ie. top to bottom approch or bottom to top, ex Task 3>Task 2>Task1.
Controls:
    a. list to display the item in lists
    b. Radio button - for mark as complete
    c. Edit Button - edit the task
    d. Delete Button - delete the test
Actions:
    1. Radio Button:
    a. Once the task is completed or click on radio button, then stike through the text.
    b. Once the tesk completed, then hide the edit and delete button
    c. If i click on the radio button, then it should toggle,
        i. if click, then completed
        ii. if unclick, the active
        iii. Once inActive then, show edit/delete button
    2. Edit Action:
        a. When click on edit, display the test in above add area,
        b. Display the update and cancel button in top section.
        c. On Update : we will do the same operation as add except adding, need to update the seelected item.
        d. On Cancel : Reset to normal.
        e. When click on edit, then disable all other items except selected item
    3. Delete Action:
        a. On Delete, ask for confirmation for delete,
        b. Once confirm, then remove the item from list.
3. Data Storage:
Description : Store the task in memory, when user refresh the page also, we will display the items
Actions :
    a. Every add/update/delete, update the storage
    b. We have to use localstorage for the operation
    c. We will store data in JSON format
4. Filter: 
Description : Filter the dataa based on requirements;
Controls :
    a. filter by task name
    b. filter by completed
5. Language :
Description : Enable multi language in application

Actions:
    a. English : default
    b. Hindi - configure
6. API 
Description : Communication with HTTP API
7. Unit Test Case
Tools:
1. Bootstrap : CSS library
2. LocalStorage
3. JSON

Component : Component is building blocks,which is used to create the UI
Structure of Components:
    1. HTML - Design
    2. CSS - Style
    3. Code - Logic
    4. Test Case - Unit test case
Component name is "app"
    1. HTML - app.compnent.html
    2. CSS - Style(app.component.css)
    3. Code - Logic >> app.component.ts(Type Script file extension)
    4. Test Case - Unit test case >>> app.component.spec.ts(spec for unit test case)
Generate Own Component
ng generate/g component/c <componentName>   

Directive : This will used to manipulate HTML/DOM
2 Types
Structural directives: if we want to change the structure of the HTML 

Reactive Form: Its used to work with HTML forms
1. Form Control: its just a HTML control
2. Form Group : group of the form control
3. Form Array : Group of form Group

Translate
https://github.com/ngx-translate/core

Use this fake api to try out calling an end point : https://jsonplaceholder.typicode.com/

Use this to download GIT on your local machine :https://git-scm.com/download/mac

ng build --configuration production : do the production build
When you clone or download angualar project
project folder :> npm install
install all the node_modules inside the project

https://pages.github.com/: it used to build static pages

angular app heroku
