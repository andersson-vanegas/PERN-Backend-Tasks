import { useEffect, useState } from 'react'
// ¿Qué hace useEffect? Al usar este Hook, le dices a React que tu componente necesita hacer algo después del renderizado. React recordará la función que pasó (nos referiremos a ella como nuestro "efecto") y la llamará más tarde después de realizar las actualizaciones de DOM.
import { Card, CardContent, Typography, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
debugger;
export default function TaskList() {
 
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const loadtasks = async () => {
    // La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP,
    const response = await fetch('http://localhost:4000/tasks');
    const data = await response.json()
    setTasks(data);
  };
  // creacion funcion delete
  const handleDelete  = async (id) => {
  try {
       // eliminado del backend
   await fetch(`http://localhost:4000/tasks/${id}`,{
    method:"DELETE",
})
// eliminado del frontend
setTasks(
tasks.filter(task => task.id !== id)
)
  } catch (error) {
    console.error(error);
  }
  }
  useEffect(() => {
    loadtasks()
  }, [])



  return (
    <>
      {
        tasks.map((task) =>(
          <Card style={{
            marginTop:"2rem",
            marginBottom: ".7rem",
            backgroundColor: '#1e272e',
          }}
            key={task.id}
          >
            <CardContent style={{
              display:'flex',
              justifyContent:'space-between',
            }}>
             <div style={{color:"white"}}>
               <Typography>{task.title}</Typography>
               <Typography>{task.description}</Typography>
              </div>
              <div>
               <Button variant='contained' color="inherit" onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                  Edit
               </Button>
               <Button variant='contained' color="warning" onClick={() => handleDelete(task.id)}
               style={{ marginLeft: ".5rem"}}>
                Delete
               </Button>
               </div>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
