const express = require('express')
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const jwtMiddlware = require('../middleware/jwtMiddleware')
const router = new express.Router

router.post('/register', userController.registerController)
router.post('/login', userController.loginController)
router.post('/addTask', jwtMiddlware, taskController.addTaskController)
router.get('/viewMainTask', jwtMiddlware, taskController.userTaskController)
router.put('/task/:id/edit', jwtMiddlware, taskController.taskEditController)
router.delete('/task/:id/delete', jwtMiddlware, taskController.taskDeleteController)



module.exports = router