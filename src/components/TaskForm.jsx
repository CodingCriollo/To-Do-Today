import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';

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
