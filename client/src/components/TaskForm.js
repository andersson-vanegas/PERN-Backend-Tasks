import { Card, CardContent, Grid, TextField, Typography, Button, CircularProgress } from '@mui/material'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); /* Cancelar recargo formulario */
    setloading(true)
    const res = await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      body: JSON.stringify(task),/*vuelve string a un objecto*/
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    setloading(false)
    navigate('/')
  };
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });



  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}
          style={{
            backgroundColor: '#1e272e',
            padding: '1rem',
          }}>
          <Typography variant='5' textAlign="center" color="white">
            Create task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="write Your Title"
                sx={{
                  display: 'block',
                  margin: '.5rem 0',
                }}
                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Write Your description"
                multiline
                rows={4}
                sx={{
                  display: 'block',
                  margin: '.5rem 0',
                }}
                name="description"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button variant="contained" color="primary" type="submit" 
              disabled={!task.title|| !task.description}>
                {loading ? (
                  <CircularProgress color="inherit" size={24} /> /* conexion lenta*/
                ) : ( 
                  "create"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
