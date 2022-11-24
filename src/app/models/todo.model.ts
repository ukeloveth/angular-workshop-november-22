//eport is used to give permission to any declartion
//which will access out side this
export interface ITodo{
    task: String;
    createdOn: Date;
    completed:boolean
}

export interface IEditTodo{
    item:ITodo,
    index:number;
}
