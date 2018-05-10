require('../config/mongoose');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

const Tasks = mongoose.model('tasks', TaskSchema);
module.exports = Tasks;