import {configureStore} from "@reduxjs/toolkit"
import todosReducer from "./todoSlices"
const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})
export default store;