
import './App.css'
import HomeScreen from './Pages/Homescreen/HomeScreen'
import LoginScreen from './Pages/loginScreen/LoginScreen'
import {
  BrowserRouter as Router,
  
  Route,
  Routes
 
 
} from "react-router-dom";



function App() {
 
  return (
    <div className="App">
   <Router>
   
      <Routes>
      <Route path='/' element={<HomeScreen/>}>

      </Route>
      <Route path='/login' element={<LoginScreen/>}>

      </Route>
      </Routes>
    
   </Router>
   
    </div>
  )
}

export default App
