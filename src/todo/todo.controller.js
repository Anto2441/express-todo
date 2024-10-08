import todoService from './todo.service.js';

export default {
  getTodos: (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
  },

  getTodo: (req, res) => {
    const id = req.params.id;
    const todo = todoService.getTodo(id);
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json(todo);
  },

  addTodo: (req, res) => {
    const newTodo = todoService.addTodo(req.body);
    res.status(201).json(newTodo);
  },

  updateTodo: (req, res) => {
    const id = req.params.id;

    try {
      todoService.updateTodo(id, req.body);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteTodo: (req, res) => {
    const id = req.params.id;

    try {
      todoService.deleteTodo(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};
