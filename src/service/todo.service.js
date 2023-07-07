const { Op } = require('sequelize');
const Todo = require('../model/todo');

const TodoService = {
    createTodoTask: async ({ body }) => {
        try {
            const { title, type } = body;
            const task = await Todo.create({
                title,
                status: 'pending',
                type
            })
            return task
        } catch (error) {
            throw new Error(error.message)
        }
    },
    getAllTodoTask: async ({ search, type }) => {
        try {
            let condPersonal = { type: 'personal' };
            let condProfassional = { type: 'professional' };
            if (search && type === 'personal')
                condPersonal = { ...condPersonal, title: { [Op.iLike]: `%${search}%` } }
            if (search && type === 'professional')
                condProfassional = { ...condProfassional, title: { [Op.iLike]: `%${search}%` } }
            const [personalTask, professionalTask] = await Promise.all([
                Todo.findAll({ where: condPersonal, order: [['id', 'DESC']] }),
                Todo.findAll({ where: condProfassional, order: [['id', 'DESC']] })
            ]);
            return { personalTask, professionalTask }
        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    },
    updateTaskStatus: async ({ id }) => {
        try {
            const tasks = await Todo.update({ status: 'completed' }, { where: { id } })
            return tasks
        } catch (error) {
            throw new Error(error.message)
        }
    },
    deleteTask: async ({ id }) => {
        try {
            const tasks = await Todo.destroy({ where: { id } })
            return tasks
        } catch (error) {
            throw new Error(error.message)
        }
    },
    clearTask: async ({ type }) => {
        try {
            const tasks = await Todo.destroy({ where: { type: type, status: 'completed' } })
            return tasks
        } catch (error) {
            throw new Error(error.message)
        }
    },
}

module.exports = TodoService;