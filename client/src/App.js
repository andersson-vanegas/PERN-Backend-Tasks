import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TasktList from './components/TaskList'
import Menu from "./components/Navbar"
import { Container } from "@mui/material";
export default function App() {
  // navegacio
  return (
    <BrowserRouter> 
      <Container>
      <Menu/>
      <Routes> lista de urls 
          <Route path="/" element={<TasktList/>}/> TaskList tomara la clase
          <Route path="tasks/new" element={<TaskForm/>}/>
          {/* edit  Route*/}
      </Routes>
      </Container>
    </BrowserRouter>
  );
}
