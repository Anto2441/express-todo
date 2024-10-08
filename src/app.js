import express from 'express';
import todoModule from './todo/todo.module.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(todoModule);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
