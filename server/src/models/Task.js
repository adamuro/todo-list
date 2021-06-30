const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user_id: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;