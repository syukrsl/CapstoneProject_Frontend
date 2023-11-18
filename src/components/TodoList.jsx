import React, { useState } from 'react';
import './TodoList.css'; // Import your CSS file for styling

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEdit = (index) => {
    setEditTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const updateTask = () => {
    if (editedTask) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = editedTask;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
      setEditedTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditTaskIndex(null);
    setEditedTask('');
  };

  return (
    <div className="container mt-5">
      <div className="card meeting-card">
        <div className="card-header">
          <h2 className="card-title text-white text-center">Todo List</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control stretch-input"
              placeholder="Add a task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="text-center mt-3">
              <button
                className="btn btn-primary add-button"
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </div>
          <ul className="task-list mt-4">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {editTaskIndex === index ? (
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={updateTask}>
                      Update
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="task-content">{task}</div>
                    <div>
                      <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
