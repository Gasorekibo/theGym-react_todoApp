import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
const TodoList = () => {
  const todos = useSelector((store) => store?.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
      
    </ul>
  );
};

export default TodoList;
