const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { ValidationError } = require('express-validation')
require('./src/config/sequelize');
const routes = require('./src/routes');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', routes);


app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});