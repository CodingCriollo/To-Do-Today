import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  background-color: #333;
  padding: 0.5rem;
  margin: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.397) 0px 3px 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
`;

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
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Agregar una tarea"
        value={newTask}
        onChange={handleChange}
        required
      />
      <Button type="submit">Agregar</Button>
    </FormWrapper>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default TaskForm;
