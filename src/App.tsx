import { useState } from 'react'
import './App.css'
import './components/TaskFilter/TaskFilter'
import './components/TaskItem/TaskItem';
import './components/TaskList/TaskList';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  return (
    <section id="center">
      <h1>Task Manager</h1>
      <div className="card">
        <TaskList />
      </div>
    </section>
  );
}

export default App
