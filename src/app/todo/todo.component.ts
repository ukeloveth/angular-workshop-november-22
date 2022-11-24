import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEditTodo, ITodo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
//import{HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  //let names : string=[]; : declaring array of string
  // define a blank array(ie dynamic array)
  items: ITodo[] = [];
  //list<IToDo>item;


  //define a blank object
  // ! is used to define nullable or blank item
  editItem!:IEditTodo|null;
  //http: any;
  //editItem!: IEditTodo;

  //taskName:String="";
  constructor(private service:TodoService,
   private http: HttpClient) { }

  ngOnInit(): void {
    // load the all the existing task from local storage
  this.service.load();
  this.items=this.service.todoItems;
  //
  this.loadRemoteTodo();
  }

  loadRemoteTodo(){
    // this.http.post("",{});
    // this.http.put("",{}); 
    // this is fake api  
  //   this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(result=>{console.log(result);
  // })


    this.http.get("http://localhost:4200/assets/todo.json").subscribe(result=>{console.log(result);
  })
  }


  handleAdd(taskName:String){
    this.service.add(taskName);
    //console.log(taskName);
    //this.taskName=tName;

    // 1.check duplicate
    // 2. add the items

    this.items.push({
      task:taskName,
      createdOn:new Date(),
      completed:false
 
    });

    console.log(this.items);
  }

   handleDelete(index:number){
    // delete the items
    this.items.splice(index,1)
    // remove the item
    this.service.remove(index);
  }

  handleEdit(index:number){
    // assigning the item instance to the editItem
    //this.editItem=this.items[index];

    //console.log(this.editItem);

    this.editItem = {
      index: index,
      item: this.items[index]
    }
  }

  handleUpdate(updatedModel:IEditTodo){
   // update the existing value
   this.items[updatedModel.index] = updatedModel.item;
   //clear the edit
   this.editItem=null; 
   //
   this.service.update(updatedModel);
  }

  handleCancel(){
    //clear the edit
    this.editItem=null;
  }

  handleComplete(index:number){
    //get the item instance
    const instance=this.items[index];
    // toggle !true !false
    this.items[index].completed=!instance.completed;
  }
}
