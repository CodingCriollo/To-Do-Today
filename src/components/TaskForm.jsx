import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

 const handleSubmit = (e) => {
   e.preventDefault();
   if (newTask.trim() !== '') {
     onAddTask(newTask);
     setNewTask('');
     swal('¡Cambio detectado!', 'Has agregado una tarea nueva.', 'info');
   }
 };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input type="text" value={newTask} onChange={handleChange} />
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
