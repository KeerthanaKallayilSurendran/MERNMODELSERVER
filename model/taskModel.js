const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        require: true
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
    taskStatus: {
        type: String,
        require:true
    },
    progress: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("tasks", taskSchema);
