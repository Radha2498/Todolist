

const express = require('express');


var taskController = require('../Controller/controller');



const router = express.Router();
router.get('/tasks',taskController.getTaskList);

router.post('/addtask', taskController.addTaskList);

// exporting the router
module.exports = router;