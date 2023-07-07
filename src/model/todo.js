const { DataTypes, ENUM } = require('sequelize');
const sequelize = require('../config/database');

const Todo = sequelize.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: ENUM("pending", "completed"),
        allowNull: false,
    },
    type: {
        type: ENUM("personal", "professional"),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Todo;