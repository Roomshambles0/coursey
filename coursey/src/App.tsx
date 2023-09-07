
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navabar';
import Signin from "./components/Landing/Signin";
function App() {

  return (
    <>
       <Router> 
      <Routes>
        <Navbar></Navbar>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signin' element={<Signin/>}/>
      </Routes>  
    </Router>
   
    </>
  )
}

export default App
