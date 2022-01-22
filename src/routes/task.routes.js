const { Router } = require('express');
const pool = require('../database')
const router = Router(); // nos permite crear nuevas urls

router.get('/tasks', async (req, res)=>{
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json('ejecutado')
})

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