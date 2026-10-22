import { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from './api';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [authError, setAuthError] = useState(false); // NEW: Track if we are locked out

  // Step 3: Fetch tasks on load
  useEffect(() => {
    getTasks()
      .then((data) => {
        // DEFENSIVE CHECK: Is the data actually an array?
        if (Array.isArray(data)) {
          setTasks(data);
          setAuthError(false);
        } else {
          // If it's an object (like a 401 Unauthorized error), don't crash!
          console.error("Backend rejected the request:", data);
          setTasks([]); 
          setAuthError(true); // Flag that we got an auth error
        }
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Step 4: Handle form submission
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = { title: newTaskTitle, priority: 'high' };

    createTask(newTask)
      .then((savedTask) => {
        if (savedTask && savedTask._id) {
          setTasks([...tasks, savedTask]); 
          setNewTaskTitle(''); 
        } else {
          alert("Failed to save task. Are you logged in?");
        }
      })
      .catch((err) => console.error("Error saving task:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id)
        .then((response) => {
          if (response && !response.error) {
            setTasks(tasks.filter(task => task._id !== id));
            alert("Task deleted successfully! 🗑️");
          } else {
            alert("Failed to delete. Are you logged in?");
          }
        })
        .catch(err => console.error("Error deleting task:", err));
    }
  };

  return (
    <div className="task-manager-section">
      <h2>Live Database Task Manager</h2>
      <p>This page is connected directly to my MongoDB backend!</p>
      
      {/* NEW: Show a warning if the user doesn't have a VIP pass (token) */}
      {authError && (
        <div style={{ padding: '10px', backgroundColor: '#ffcccc', color: '#cc0000', marginBottom: '15px', borderRadius: '5px' }}>
          <strong>Unauthorized:</strong> You need to be logged in with a valid token to view or manage tasks.
        </div>
      )}

      {/* Creation Form */}
      <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task..."
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
          disabled={authError} // Disable input if not authorized
        />
        <button type="submit" style={{ padding: '8px 15px' }} disabled={authError}>Add Task</button>
      </form>

      {/* Task List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.length === 0 && !authError ? <p>Loading tasks from database...</p> : null}
        
        {tasks.map((task) => (
          <li key={task._id} style={{ padding: '10px', border: '1px solid #444', marginBottom: '10px', borderRadius: '5px' }}>
            <strong>{task.title}</strong> 
            <span style={{ marginLeft: '15px', color: '#888' }}>Priority: {task.priority}</span>
            
            <button 
              onClick={() => handleDelete(task._id)} 
              style={{ marginLeft: '15px', padding: '4px 8px', backgroundColor: '#d9534f', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;