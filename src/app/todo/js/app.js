//JavaScript Introduction:
//Variable
//int age=20;
//String name=“Angular”
//Java/C#
//var
//let
//const
//Based on the value the datatype can be assign
// Var age = 20;//number
// age=“Angular”;//string
// age=false;//boolean
// age=[];//array
// age={}//object

// Let course=“Angular”
// course=20;
// //Note since it is constant you can not change the value
// const fee=2000; 
// fee=3000; // it is wrong.

// Note: that var is a global variable, while let is scope variable

// //operator
// //+-/ ,etc
// Let n1 = 10;
// Let n2 = 20;
// Let sum = n1 + n2;

// Conditional statement:
// If(fee==2000){
// }
// else if(fee===3000){
// }
// else{
// }

// //switch case
// switch(fee){
// 	case 2000:{
// } break;
// Case 3000:{

// }break;
// Default:{

// }break;
// }

// // loop
// // for 
// for(let i =0;i<10;i++){

// }
// //while
// let count=0;
// while(count>10){
// 	count++;
// }

// // do while
// do{
// 	count++;
// }while(count>10)

// //array in javascript is not fixed
// //String [] names={“Na”,””}
// let nums=[10,20,30,40]

// //object :  
// let emp = {
// 	name: ‘Angular’,
// 	age: 20,
// 	address: ‘Hyd'
// } 

// //function
// function add(n1,n2){
// 	let sum = n1+n2;
// 	return sum;
// }

// add();
function TodoComponent(){
  var taskName=  AddComp()
  ListComp(taskName);

  //receive the task name
  //pass this task name to list

}

function AddComp(){
    //click event
    //get the task name
    //pass this task to parent

}

function ListComp(){
    //when task name is received bind into

}