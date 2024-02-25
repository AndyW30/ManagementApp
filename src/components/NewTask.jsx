import { useState } from 'react';
import Button from './Button';
export default function Task({ onAdd }) {
  const [task, setTask] = useState('');
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (task.trim() === '') {
      return;
    }
    onAdd(task);
    setTask('');
  };
  return (
    <div className="flex items-center gap-8">
      <input
        type="text"
        className="w-80 h-10 px-2 py-4 rounded-sm bg-stone-200 active:border-stone-800 mr-8"
        onChange={handleChange}
        value={task}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
