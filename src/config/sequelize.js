const sequelize = require('./database');
const todo = require('../model/todo');

todo.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });