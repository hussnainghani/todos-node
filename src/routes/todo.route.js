const express = require('express');
const { validate } = require('express-validation');
const TodoController = require('../controller/todo.controller');
const { createTask } = require('../middleware/validation/todo.validation');

const router = express.Router();

router.post('/create-task', validate(createTask), TodoController.createTodoTask);
router.get('/get-all-task', TodoController.getAllTodoTask);
router.put('/update-task-status/:id', TodoController.updateTaskStatus);
router.delete('/delete-task/:id', TodoController.deleteTask);
router.put('/clear-tasks', TodoController.clearTask);

module.exports = router;