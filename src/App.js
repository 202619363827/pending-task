// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';

//
import React, { useState } from 'react';
// import './App.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), task: currentTask, completed: false }]);
      setCurrentTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    // <div className="Todo"></div>
    
    <div className="container">
      <h1>Pending Task </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button type="submit" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <div className="todo-list">
        {tasks.map((task) => (
          <div className="todo-item" key={task.id}>
           {/* <p
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.task}
          </p> */}
            <p className={task.completed ? 'complete'  : ''}>{task.task}</p>
            <div className="buttons">
              <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <p className="remaining-tasks">{tasks.filter ((task) => !task.completed).length} tasks remaining</p>
    </div>
    
  );
}

export default Todo;
