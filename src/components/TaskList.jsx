import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListWrapper = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.479) 0px 3px 8px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  const [prevTasks, setPrevTasks] = useState(tasks);

  useEffect(() => {
    if (prevTasks.length !== tasks.length) {
      swal('¡Cambio detectado!', 'La lista de tareas ha cambiado.', 'info');
      setPrevTasks(tasks);
    }
  }, [prevTasks.length, tasks]);

  return (
    <>
      {tasks.length > 0 && (
        <ListWrapper>
          <List>
            {/* Mapeo de las tareas y renderización de componentes TaskItem */}
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onTaskComplete={onTaskComplete}
                onTaskDelete={onTaskDelete}
              />
            ))}
          </List>
        </ListWrapper>
      )}
    </>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
