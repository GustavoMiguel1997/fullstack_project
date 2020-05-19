const mongoose = require('mongoose');

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose.connect(
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);

mongoose.connection.on('error', () => console.log('conection error'));
mongoose.connection.on('open', () => console.log('database connected'));

module.exports = mongoose;