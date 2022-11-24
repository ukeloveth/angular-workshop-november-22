import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //@Input() is used to define the input attribute of the component
  // @Input() task:String='';
  @Input() items:ITodo[]=[];

  //delete event
  @Output() onDelete=new EventEmitter<number>();
  
  //edit event
  @Output() onEdit=new EventEmitter<number>();

  //edit event
  @Output() onComplete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

    // for (let i = 0; i< this.items.length; i++) {
    // this.items[i];
     
    // }
    //or

    // for (let obj of this.items) {
      
    // }
    // Not no longer usefull
    // if(this.items.length==0){
    //   //success/true
    // }
    // else{
    //   //
    // }

    // if(this.items.length!=0){

    // }

    
  }

  handleDelete(index:number){
    //console.log(this.items[index])
    if(confirm('Do you want to deleete')){
      //send the index to the parent
      this.onDelete.emit(index);
    }
  }

  handleEdit(index:number){
    this.onEdit.emit(index);
  }

  handleComplete(index:number){
    this.onComplete.emit(index);
    // console.log(index);
  }

}
