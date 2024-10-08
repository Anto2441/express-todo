import { randomUUID } from 'crypto';

const todos = [];

export default {
  getTodos: () => {
    return todos;
  },

  getTodo: (todoId) => {
    const todo = todos.find((t) => t.id === todoId);
    if (!todo) {
      return null;
    }

    return todo;
  },

  addTodo: (body) => {
    const id = randomUUID();
    const newTodo = { id, ...body };
    todos.push(newTodo);

    return newTodo;
  },

  updateTodo: (todoId, body) => {
    const todo = todos.find((t) => t.id === todoId);
    if (!todo) {
      throw new Error('Todo not found');
    }

    const updatedTodo = { ...todo, ...body };

    todos.splice(todos.indexOf(todo), 1, updatedTodo);
  },

  deleteTodo: (todoId) => {
    const todo = todos.find((t) => t.id === todoId);
    if (!todo) {
      throw new Error('Todo not found');
    }

    todos.splice(todos.indexOf(todo), 1);
  },
};
