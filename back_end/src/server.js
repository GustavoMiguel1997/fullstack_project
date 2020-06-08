const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const { SERVER_PORT, DB_HOST } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

require('./app/controllers/controllers')(app);

app.get('/', (req, res) => {
  res.send('Server started port 3000!');
})

app.listen(SERVER_PORT, '0.0.0.0', console.log('SERVER STARTED'));