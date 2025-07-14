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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
          <Route path="home" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
              }>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='employee' element={<Employee/>}></Route>
          </Route>
          
      </Routes>
    </>
  )
}

export default App
