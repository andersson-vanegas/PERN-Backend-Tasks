const pool = require('../database'); // importamos la funcion POOL

// obtener todas las tareas
const getAllTasks = async (req, res, next) => {
    try {
        const AllTasks = await pool.query('SELECT * FROM task');
        res.json(AllTasks.rows)
    } catch (error) {
        next(error);
    }
};



//al ser visitada mandara el mensaje al front
// obtener una tarea
const getTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "task not found",
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// crear tarea
const createtask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query("INSERT INTO task (title, description ) VALUES ($1, $2) RETURNING *", // se insertan valores 
            [title, description]
        );
         return res.json(result.rows[0]); // las tareas se anidaran a rows 
    } catch (error) {
        next(error); // este error va diectamente a app.use(error)
    }
};


// borramos una tarea tasks/:id
const deletetask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
        if (result.rowCount === 0)
            return res.status(404).json({
                message: "task not found"
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

// actualizamos una  tarea
const updatetask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const result = await pool.query(
            "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
            [title, description, id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Task not found"
            })
        return res.send(result.rows[0]);
    } catch (error) {
        next(error);
    } // al ser visitada mandara el mensaje al front
};
// exportaremos todo el CRUD de las tareas
module.exports = {
    getAllTasks,
    getTask,
    createtask,
    deletetask,
    updatetask,
};