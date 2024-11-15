const tasks = require("../model/taskModel");

// Add Task Controller
exports.addTaskController = async (req, res) => {
    console.log('Inside Add Task Controller');

    const userId = req.userId
    const { taskName, taskDescription, startDate, endDate, taskStatus } = req.body;
    if (taskStatus == "Not Started") {
        progress = "0%"
    } else if (taskStatus == "Started") {
        progress = "25%"

    } else if (taskStatus == "Half Completed") {
        progress = "50%"

    } if (taskStatus == "Completed") {
        progress = "100%"
    }

    try {
        const newTask = new tasks({
            taskName, taskDescription, startDate, endDate, taskStatus, progress, userId
        })
        await newTask.save()
        res.status(200).json(newTask)
    } catch (error) {
        console.log(error);
    }
};

// user task view controller
exports.userTaskController = async (req, res) => {
    console.log("Inside user Task controller");
    const userId = req.userId
    console.log(userId);

    try {
        const alluserTask = await tasks.find({ userId })
        console.log(alluserTask);

        res.status(200).json(alluserTask)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit controller
exports.taskEditController = async (req, res) => {
    console.log("Inside task edit controller");
    const id = req.params.id
    const userId = req.userId
    const { taskName, taskDescription, startDate, endDate, taskStatus, progress } = req.body
    if (taskStatus == "Not Started") {
        updateProgress = "0%"
    } else if (taskStatus == "Started") {
        updateProgress = "25%"

    } else if (taskStatus == "Half Completed") {
        updateProgress = "50%"

    } if (taskStatus == "Completed") {
        updateProgress = "100%"
    }
    try {
        const updateTask = await tasks.findByIdAndUpdate({ _id: id }, { taskName, taskDescription, startDate, endDate, taskStatus, progress: updateProgress, userId }, { new: true })
        await updateTask.save()
        res.status(200).json(updateTask)
    } catch (error) {
        res.status(400).json(error)
    }
}

// remove task
exports.taskDeleteController = async (req, res) => {
    console.log("Inside task delete controller");
    const {id} = req.params
    try {
        const deleteTask = await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(400).json(error)
    }
}