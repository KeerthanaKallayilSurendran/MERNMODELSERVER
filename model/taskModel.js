const mongoose = require("mongoose");


const subtaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    isCompleted: {
        type: Boolean,
        default: false, 
    },
}); 

const taskSchema = new mongoose.Schema({
    maintask: {
        type: String,
        required: true, 
    },
    subtask: {
        type: [subtaskSchema], 
        default: [], 
    },
});

module.exports = mongoose.model("Task", taskSchema);
