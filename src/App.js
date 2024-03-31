import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Tasklist } from './Tasklist';
import { AddTask } from './AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    
  ]);
  
  return (
    <div className="App">
      <Header />
      <AddTask tasks = {tasks} setTasks = {setTasks}/>
      <Tasklist tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
}

export default App;
