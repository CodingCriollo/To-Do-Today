import './App.css';
import './reset.css';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import NavBar from './components/NavBar';
import MyDay from './components/MyDay';

function App() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

<<<<<<< HEAD
  // Actualiza el estado de las tareas 
=======
  // Almacena lista de tareas
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
  
  // Maneja tarea completada
>>>>>>> 501bef1b7f38b715d4637c200e8c02138888622c
  const handleTaskComplete = (taskId) => {
    // Marca la tarea como completada
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Actualiza el estado de las tareas
  const handleTaskDelete = (taskId) => {
    // Eliminar la tarea
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Agregar una nueva tarea
  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <NavBar></NavBar>
      <MyDay></MyDay>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
    </>
  );
}

export default App;
