import './App.css';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import { Button } from '@mui/material';
import { db } from '../src/Firebase_config';
import firebase from "../src/Firebase_config"
import TodoListitem from './Todo';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos(){
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
}))
      );
    });
  }
  

  function addTodo(e){
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
}


  return (
    <div className="App" 
    style={{display: "flex", 
    flexDirection: "column", 
    justifyContent: "center",
     alignItems:"center"}}>
     <div>
     <h1>Deji Adesina Todo's App 😎</h1>

 <form>
 <div>
  <TextField id="standard-basic" 
  label="Write a Todo" 
  variant="standard" 
  value={todoInput}
  onChange={(e) => setTodoInput(e.target.value) }
  style={{maxWidth: "400px", width:"90vw"}} />
  <Button type='submit' variant="outlined" onClick={addTodo}>Add</Button>
  </div>
  </form>
 
<div style={{marginTop: "24px"}}>
{todos.map((todo) => (
   <TodoListitem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
  ))}
</div>
 
     </div>
    </div>
  );
}

export default App;
