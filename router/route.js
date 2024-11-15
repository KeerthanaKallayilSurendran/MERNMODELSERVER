const express = require('express')
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const router = new express.Router

router.post('/register',userController.registerController)
router.post('/login', userController.loginController)
router.post('/addTask', taskController.addTaskController)
router.get('/viewMainTask', taskController.allTaskView)

module.exports = router