import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../redux/todoSlices';
import { MdDelete, MdDoneOutline } from "react-icons/md";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between space-y-2">
      <li className="flex justify-between items-center mb-2">
        <span className={todo.completed ? 'line-through text-red-400' : ''}>{todo.text}</span>
      </li>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleComplete(todo.id))}
          className= "cursor-pointer bg-blue-500 p-1 rounded text-white"
            
        >
          <MdDoneOutline size={25} />
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="bg-red-500 text-white rounded"
        >
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
