import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  //when app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    
    //this code here loads when the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //this will start on clicking the button
    event.preventDefault(); //stop refreshing
   
    //adds my input to the db
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
   }) 
    setTodos([...todos, input])
    setInput('') //clears up input after submission
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      
      
      
      <FormControl>
        <InputLabel>Write a To-Do</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)}/>
        <FormHelperText id="my-helper-text">Add stuff to do</FormHelperText>
      </FormControl>
      
      
      <Button disabled = {!input} type = "submit" onClick = {addTodo}variant="contained" color="primary">
      Add
      </Button>
      {/* <button type = "submit" onClick = {addTodo}>Add</button> */}
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo todo = {todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
