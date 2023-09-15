
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {
  RecoilRoot,
  useSetRecoilState
} from 'recoil';
import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navabar';
import Signin from "./components/Landing/Signin";
import { PageCourse } from "./components/User/AllCourses";
import { Purchased } from "./components/User/Purchasedc";
import { CreateCourse } from "./components/Admin/CreateCourse";
import { Created } from "./components/Admin/YourCourses";
import { Update } from "./components/Admin/Update";
import Adminsignup from "./components/Admin/Signup";
import Adminsignin from "./components/Admin/Signin";
import Signup from "./components/Landing/Signup";
function App() {

  return (
    <>
    <RecoilRoot>
      <Router> 
        <Navbar />
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/user' element={<PageCourse/>}/>
      <Route path='/myLearnings' element={<Purchased/>}/>
      <Route path='/admin/createcourse' element={<CreateCourse/>}/>
      <Route path='/admin/courses' element={<Created/>}/>  
      <Route path='/admin/updatecourses/:id' element={<Update/>}/>
      <Route path='/admin/signup' element={<Adminsignup/>}/> 
      <Route path='/admin/signin' element={<Adminsignin/>}/>   
      <Route path='/user/signup' element={<Signup/>}/>   
      </Routes>  
    </Router>
    </RecoilRoot>
    </>
  )
}

export default App
