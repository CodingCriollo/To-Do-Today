import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';
<<<<<<< HEAD
//import '../styles/TaskItem.css';
=======
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #444;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#888' : '#fff')};
  margin-bottom: 10px;
  flex-grow: 1;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.complete ? '#2ecc71' : '#e74c3c')};
  color: #fff;
  width: 90%;
  padding: 5px 10px;
  margin: 5px 0 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.complete ? '#27ae60' : '#c0392b')};
  }

  @media (min-width: 768px) {
    width: auto;
    margin-top: 0;
  }
`;
>>>>>>> 501bef1b7f38b715d4637c200e8c02138888622c

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
<<<<<<< HEAD
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
=======
    <ItemWrapper>
      <TaskText completed={completed}>{task.text}</TaskText>
      <ActionButton complete={completed} onClick={handleComplete}>
        Completar
      </ActionButton>
      <ActionButton onClick={handleDelete}>Eliminar</ActionButton>
    </ItemWrapper>
>>>>>>> 501bef1b7f38b715d4637c200e8c02138888622c
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
