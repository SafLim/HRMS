import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route} from 'react-router-dom'
import LoginForm from './pages/login'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Employee from './pages/employee'
import ProtectedRoute from './components/utils/protectedRoute'
import Unauthorized from './components/utils/unauthorize'
import LogoutButton from './components/utils/logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/unauthorized" element={<Unauthorized/>} />
          <Route path="home" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
              }>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='employee' element={<ProtectedRoute allowedRoles={["hr", "manager", "admin"]}>
              <Employee/>
            </ProtectedRoute>

          }></Route>
          </Route>
          
      </Routes>
    </>
  )
}

export default App
