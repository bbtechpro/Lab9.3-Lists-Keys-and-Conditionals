import { Task } from './types/types.ts';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <li 
      className={`task-item ${task.priority}`}
      style={{ 
        borderLeft: `5px solid ${task.priority === 'high' ? 'red' : 'gray'}`,
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        opacity: task.isCompleted ? 0.6 : 1
      }}
    >
      <input 
        type="checkbox" 
        checked={task.isCompleted} 
        onChange={() => onToggle(task.id)} 
      />
      <span>{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

