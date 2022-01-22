const { Router } = require('express');
const {getAllTasks} = require ('../controllers/task.controller')
const router = Router(); // nos permite crear nuevas urls

router.get('/tasks', getAllTasks)

router.get('/tasks/10', (req, res)=>{
    res.send('Retornando una sola tarea') // al ser visitada mandara el mensaje al front
})

router.post('/tasks', (req, res)=>{
    res.send('Creando una lista de tarea') // al ser visitada mandara el mensaje al front
})

router.delete('/tasks', (req, res)=>{
    res.send('Borrando una lista de tarea') // al ser visitada mandara el mensaje al front
})

router.put('/tasks', (req, res)=>{
    res.send('Actualizando una lista de tareas') // al ser visitada mandara el mensaje al front
})

module.exports = router;