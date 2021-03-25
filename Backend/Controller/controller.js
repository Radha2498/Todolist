const task = require('../Model/model');  
exports.getTaskList = (req, res, next) => {
    task.find().then(result => {
        res.status(200).json({ task: result })
    })
}
exports.addTaskList = (req, res, next) => {
    const name = req.body.name;
    const Tasks = new task({ name: name });
    Tasks.save().then(result => {
        res.status(200).json({task: result} )
    }).catch(err => {
        console.log(err)
    })
}
