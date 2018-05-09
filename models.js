const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb://localhost/restful_task");
    mongoose.promise = global.Promise;

    const TaskSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, default: "" },
        completed: { type: Boolean, default: false },
    }, { timestamps: true });

    Tasks = mongoose.model('tasks', TaskSchema);
}