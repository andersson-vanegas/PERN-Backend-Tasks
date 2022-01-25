const { Router } = require("express");
const {
    getAllTasks,
    getTask,
    createtask,
    deletetask,
    updatetask,
} = require('../controllers/task.controller')
const router = Router(); // nos permite crear nuevas urls

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask); //ctrl + click me lleva a la funcion


router.post('/tasks', createtask);

router.delete('/tasks/:id', deletetask);

router.put('/tasks/:id', updatetask);

module.exports = router;