const task = require("../model/taskModel");

// Add Task Controller
exports.addTaskController = async (req, res) => {
    console.log('Inside Add Task Controller');

    try {
        console.log(req.body);
        
        const { maintask } = req.body; 
        console.log(maintask);
        
        const newTask = new task({
            maintask,
            subtask:[],
        });
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (error) {
        console.log(error);
    }
};


exports.allTaskView = async (req, res) => {
    console.log("Inside page project controller");
    try {
        const allTask = await task.find()

        res.status(200).json(allTask)
    } catch (err) {
        res.status(401).json(err)
    }

}



