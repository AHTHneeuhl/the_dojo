import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
                exact='true'
              />
              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' />}
                exact='true'
              />
              <Route
                path='/projects/:id'
                element={user ? <Project /> : <Navigate to='/login' />}
                exact='true'
              />
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' />}
                exact='true'
              />
              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to='/' />}
                exact='true'
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
