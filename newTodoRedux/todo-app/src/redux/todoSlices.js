import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


const createTodo = (todo) => {
    return  { id: nanoid(), text: todo, completed: false };
  };
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(createTodo(action.payload));
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});
export const  {addTodo, removeTodo, toggleComplete}  = todoSlice.actions
export default todoSlice.reducer;