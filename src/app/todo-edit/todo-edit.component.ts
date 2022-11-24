import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEditTodo, ITodo } from '../models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  // store the edit item instance
  @Input() editItem!: IEditTodo;

  //Declare a class : named taskName and declare it to be empty
  taskName!:String;

  @Output() onUpdate=new EventEmitter<IEditTodo>();

  @Output() onCancel=new EventEmitter();

  constructor() { }
  //this call only once the component get initialized
  // life cycle
  ngOnInit(): void {
   // console.log(this.editItem)
    this.taskName=this.editItem.item.task;
  }

  handleUpdate(){
    this.onUpdate.emit({
      index:this.editItem.index,
      item:{
        createdOn:new Date(),
        task:this.taskName,
        completed:false
      }
    })
  }

  handleCancel(){
    if(confirm('Do you want to cancel?')){
      this.onCancel.emit();
    }

  }

}
