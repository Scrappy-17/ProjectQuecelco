import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './component/sidebar';
import Dashboard from './pages/Dashboard';
import { Protectedpage } from './component/Protectedpage';
import Home from './pages/Home';





const App = () => {
  return (
    <div>
      <Router>
        <Sidebar >
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/Signup' element={<Signup />}/>
          
            <Route element={<Protectedpage />}>            
                <Route path='/Home' element={<Home />}/> 
                <Route path='/Dashboard' element={<Dashboard />}/> 
            </Route>
            
          </Routes>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App;