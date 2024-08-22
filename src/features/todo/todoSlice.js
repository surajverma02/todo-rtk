import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      todoText: "Redux Todo",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoText: action.payload,
      };
      if(todo.todoText) state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (currTodo) => currTodo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
