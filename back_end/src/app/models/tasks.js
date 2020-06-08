const mongoose = require('../../database/database');

const TaksScheme = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: 'todo'
  },
  dateLimit: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', TaksScheme);

module.exports = Task;