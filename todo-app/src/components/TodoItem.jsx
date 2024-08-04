import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-red-400' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
