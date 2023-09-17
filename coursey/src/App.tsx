
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
import Navbar, { Adminnav, Usernav } from './components/Landing/Navabar';
import Signin from "./components/Landing/Signin";
import { PageCourse } from "./components/User/AllCourses";
import { Purchased } from "./components/User/Purchasedc";
import { CreateCourse } from "./components/Admin/CreateCourse";
import { Created } from "./components/Admin/YourCourses";
import { Update } from "./components/Admin/Update";
import Adminsignup from "./components/Admin/Signup";
import Adminsignin from "./components/Admin/Signin";
import Signup from "./components/Landing/Signup";
import { userState } from "./store/atoms/user";
import { adminState } from "./store/atoms/admin";
import axios from "axios";
import {useEffect} from 'react';

function App() {

  return (
    <>
    <RecoilRoot>
      <Router> 
        <Navbar />
        <InitUser />
        <InitAdmin/>
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

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async() => {
      try {
          const response = await axios.get(`http://localhost:3001/user/me`, {
              headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
              }
          })

          if (response.data.username) {
              setUser({
                  isLoading: false,
                  userEmail: response.data.username
              })
          } else {
              setUser({
                  isLoading: false,
                  userEmail: ""
              })
          }
      } catch (e) {

          setUser({
              isLoading: false,
              userEmail: ""
          })
      }
  };

  useEffect(() => {
      init();
  }, []);

  return <></>
}

function InitAdmin() {
  const setAdmin = useSetRecoilState(adminState);
  const init = async() => {
      try {
          const response = await axios.get(`http://localhost:3001/admin/me`, {
              headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
              }
          })
          if (response.data.username) {
              setAdmin({
                  isLoading: false,
                  userEmail: response.data.username
              })
          } else {
              setAdmin({
                  isLoading: false,
                  userEmail: ""
              })
          }
      } catch (e) {

          setAdmin({
              isLoading: false,
              userEmail: ""
          })
      }
  };

  useEffect(() => {
      init();
  }, []);

  return <></>
}



export default App
