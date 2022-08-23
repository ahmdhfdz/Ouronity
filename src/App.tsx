import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';


// let anytype : any;

// let name : string;
// let age : number | string;
// let isStudent : boolean;
// let hobbies:string[];
// let role:[number, string];

// let printUndefined: (name:string) => void; //return undefined
// let printNoReturn: (name:string) => never; //return no return

// let unknownType : unknown;

// function printName(name:string){
//   console.log(name);
// 
// printName("Joko")

// type Person = { //type = alias
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: 'Joko',
// }

// let lotsOfPeople: Person[];

// type X = {
//   a:string;
//   b:number;
// }

// interface Person extends X{ //beda di dengan type penggunaan untuk inherit pakai extends kalau type pakai nama type lalu & (ex. X = Person & {...})
//   name: string;
//   age?: number;
// }


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  }

  console.log(todos);
  
  return (
    <div className="App">
      <span className='heading'>Ouronity</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* {todos.map((t, index)=>(
        <li key={index}>{t.todo}</li>
      ))} */}
      <TodoList todos={todos} setTodos={setTodos}/> 
    </div>
  );
}

export default App;
