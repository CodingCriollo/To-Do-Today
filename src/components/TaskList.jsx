import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
//import '../styles/TaskList.css';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  const [prevTasks, setPrevTasks] = useState(tasks);

  useEffect(() => {
    if (prevTasks.length !== tasks.length) {
      swal('¡Cambio detectado!', 'La lista de tareas ha cambiado.', 'info');
      setPrevTasks(tasks);
    }
  }, [tasks]);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {/* Mapeo de las tareas y renderización de componentes TaskItem */}
        {tasks.map((task) => (
          <TaskItem
            key={task.id} // Propiedad clave única para identificar elementos en la lista
            task={task} // Propiedad que pasa la tarea al componente TaskItem
            onTaskComplete={onTaskComplete} // Función para manejar la tarea completada
            onTaskDelete={onTaskDelete} // Función para manejar la eliminación de la tarea
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
