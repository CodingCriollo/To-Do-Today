import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';
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

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
    swal('¡Buen trabajo!', 'Has completado una tarea.', 'success');
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
    swal('Eliminado', 'Has eliminado una tarea.', 'info');
  };

  return (
    <ItemWrapper>
      <TaskText completed={completed}>{task.text}</TaskText>
      <ActionButton complete={completed} onClick={handleComplete}>
        Completar
      </ActionButton>
      <ActionButton onClick={handleDelete}>Eliminar</ActionButton>
    </ItemWrapper>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
