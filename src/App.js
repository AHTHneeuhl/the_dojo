import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} exact />
            <Route path='/create' element={<Create />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
