import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';
//import '../styles/TaskItem.css';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  // Maneja el evento de completar una tarea
  const handleComplete = () => {
    setCompleted(!completed);  // Invierte el estado de completado
    onTaskComplete(task.id);  // Llama a la función de completar tarea del padre
    swal('¡Buen trabajo!', 'Has completado una tarea.', 'success');
  };

  // Maneja el evento de eliminar una tarea
  const handleDelete = () => {
    onTaskDelete(task.id);  // Llama a la función de eliminar tarea del padre
    swal('Eliminado', 'Has eliminado una tarea.', 'info'); 
  };

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleComplete} style={{ marginLeft: '10px' }}>
        Completar
      </button>
      <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: '#dc3545', color: 'white' }}>
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
