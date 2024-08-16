import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { FcTodoList } from "react-icons/fc";


const App = () => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-96">
      <h1 className="text-3xl font-bold text-center mb-8 [letter-spacing:theme(spacing.0)]">
      <FcTodoList size={50} className='relative top-12 left-28'/>Todo <span className='text-blue-500'>List</span></h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;

