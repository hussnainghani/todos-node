const { Joi } = require('express-validation')

module.exports = {
    createTask: {
        body: Joi.object({
            title: Joi.string().required(),
            type: Joi.string().valid("personal", "professional").required()
        }),
    },
};
