import './App.css';
import { useEffect, useState } from 'react'



const Todo = () => {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([])

  const getTask = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01')
      .then(res => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));

  }
  const updateTask = (tasks) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tasks)
    }).then(res => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

  }
  const deleteAll = (tasks) => {
    setTodos([]);
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([])
    }).then(res => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

  }
  const deleteOne = (index) => {
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    setTodos(newTasks);
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01', {
      method: "PUT",
      body: JSON.stringify(newTasks),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Task deleted:", newTasks);
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <div className="search">
        <div>
          <input type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat({ label: inputValue, done: false }));
                setInputValue("");
                updateTask(todos.concat({ label: inputValue, done: false }));
              }
            }}
            placeholder="Agregar tarea..." />
        </div>
      </div>
      <div className="li-container">
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <p>
                {item.label}
              </p>
              <button
                className='btn-delete'
                onClick={deleteOne}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="task">
        <p>{todos.length} Tareas pendientes</p>
      </div>
      <div>
        <button className='btn-delete-all' onClick={deleteAll}>Borrar todo</button>
      </div>

    </div>
  );
}

export default Todo;
