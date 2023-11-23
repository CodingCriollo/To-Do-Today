import './App.css';
import './reset.css';
import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import NavBar from './components/Navbar';
import MyDay from './components/MyDay';

function App() {
  // Almacena lista de tareas
  const [tasks, setTasks] = useState([]);

  // Maneja tarea completada
  const handleTaskComplete = (taskId) => {
    // Lógica para marcar la tarea como completada
    // Actualiza el estado de las tareas
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para manejar la eliminación de la tarea
  const handleTaskDelete = (taskId) => {
    // Lógica para eliminar la tarea
    // Actualiza el estado de las tareas
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Función para agregar una nueva tarea
  const handleAddTask = (newTaskText) => {
    // Agrega nueva tarea
    // Actualiza tareas
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
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
      <TaskForm onAddTask={handleAddTask} />
    </>
  );
}

export default App;
