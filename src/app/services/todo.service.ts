import { Injectable } from '@angular/core';
import { IEditTodo, ITodo } from '../models/todo.model';

// DI is used to create singleton instance for application
// @Injectable is used for creating the DI for the class
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // store all the todo items 
  todoItems: ITodo[] = [];

  private key='todoItems';

  constructor() { }

  load(){
    //get value from local storage
    const value = localStorage.getItem(this.key);
   // Null
    if(value){
      // parse to object
      const items = JSON.parse(value);
      // Null check
    if(items){
      // assign
      this.todoItems = items;
    }
    }
  }

  // check that given task name is exist in items or not
  isExist(taskName: String): boolean {
    // check if the task is given is in todo
    return this.todoItems.findIndex(m => m.task == taskName) > -1;

  }

  add(taskName: String) {

    this.todoItems.push({
      completed: false,
      createdOn: new Date(),
      task: taskName
    })

    // add to the local storage
    localStorage.setItem(this.key,JSON.stringify(this.todoItems));

    
  }

  update(model: IEditTodo) {
    this.todoItems[model.index] = model.item;
    // update the todo item into local storage
    localStorage.setItem(this.key, JSON.stringify(this.todoItems));
  }

  remove(index: number) {
    // delete
    this.todoItems.splice(index, 1);

    // update the todo item into local storage

    localStorage.setItem(this.key, JSON.stringify(this.todoItems));
  }


}

// let obj=new TodoService();
// obj.add;
// obj.remove;
// obj.update;

// let obj1=new TodoService();
// // added item
// obj1.add('T');
// if(obj1.isExist('T')){

// }
// obj1.isExist('T') //true

// let obj2=new TodoService();
// obj2.isExist('T') // false(because this is another new object)