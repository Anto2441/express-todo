// Todo module
import { Router } from 'express';

import todoController from './todo.controller.js';
import { validateTitleMiddleware } from './middleware/validate-title.middleware.js';

const router = Router();

router.get('/todos', todoController.getTodos);

router.get('/todos/:id', todoController.getTodo);

router.post('/todos', validateTitleMiddleware, todoController.addTodo);

router.patch('/todos/:id', validateTitleMiddleware, todoController.updateTodo);

router.delete('/todos/:id', todoController.deleteTodo);

export default router;
