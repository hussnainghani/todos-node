const TodoService = require('../service/todo.service');

const TodoController = {
    createTodoTask: async (req, res) => {
        try {
            const { body } = req;
            const task = await TodoService.createTodoTask({ body });
            res.status(200).json({
                success: true,
                task
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    getAllTodoTask: async (req, res) => {
        try {
            const { search, type } = req.query;
            const tasks = await TodoService.getAllTodoTask({ search, type });
            res.status(200).json({
                success: true,
                ...tasks
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    updateTaskStatus: async (req, res) => {
        try {
            const { id } = req.params;
            await TodoService.updateTaskStatus({ id });
            res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            await TodoService.deleteTask({ id });
            res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    clearTask: async (req, res) => {
        try {
            const { type } = req.body;
            await TodoService.clearTask({ type });
            res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
}

module.exports = TodoController;