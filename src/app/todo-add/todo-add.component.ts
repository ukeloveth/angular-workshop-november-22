import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
   

  //define a varible which is store the task name
  taskName:String="";

  //Output is used to,output the data from this component to outside component
  //Output is used to create custom event
  @Output() onAdd=new EventEmitter<String>();
  
  // form group
  // form group contains a group of controls 
  form: FormGroup;

  constructor(private service:TodoService,
      formBuilder: FormBuilder) { 
      this.form = formBuilder.group({
        taskName: formBuilder.control(null,[Validators.required, Validators.maxLength(5)])
      })
    
  }

  ngOnInit(): void {
  }
   
  addTask(){
    //NOTE: instead of writing all this code for form validation
    // if(!this.taskName){
    //   alert('Task name required');
    //   return;
    // }

    // if(this.taskName.length<3){
    //   alert('Task name can not be less than 3 characters');
    //   return;
    // }

    // if(this.taskName.length>5){
    //   alert('Task name can not be more than 5 characters');
    //   return;
    // }

    // WE simply used write this code
    //console.log(this.form.controls['taskName'].errors)
    //console.log(this.form.controls['taskName'].hasError('required'));


    console.log(this.taskControl.touched);
    console.log(this.taskControl.dirty);
    console.log(this.taskControl.errors);
    console.log(this.taskControl.hasError('required'));
    if(this.form.valid){
     //System.out.println
    //console.log(this.taskName);
    //emit is used to fire the event
    // check the task name is exist or not
    // check that form is valid or not
    //console.log(this.form.get('taskName')?.errors)
    //this.form.get('controlName')
    //this.form.controls['controlName']
    if(this.service.isExist(this.taskName)){
      //true
      alert('Task name already exist');
    }
    else{
      this.onAdd.emit(this.taskName);

    }
    }else{
      //alert('invalid');
      this.taskControl.markAsDirty();
    }
    
  }
  //get is used to define a property
  get taskControl(){
    return this.form.controls['taskName'];
  }
}
