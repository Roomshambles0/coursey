import { useNavigate } from "react-router-dom"
import {useEffect,useState} from 'react';
import { useRecoilValue ,useSetRecoilState} from "recoil";
import { adminEmailState,isAdminLoading } from "../../store/selectors/adminsel";
import { userEmailState } from "../../store/selectors/userEmail";
import { isUserLoading } from "../../store/selectors/isUserLoading";
import { userState } from "../../store/atoms/user"; 
import { adminState } from "../../store/atoms/admin"; 


export default function Navbar(){
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const adminEmail = useRecoilValue(adminEmailState);
    const adminLoading = useRecoilValue(isAdminLoading);
    console.log(userEmail,adminEmail);
if(userEmail || adminEmail){
 if(userEmail){
return <Usernav name = {userEmail}></Usernav>
 }
 
if (adminEmail){
    return<Adminnav name = {adminEmail}></Adminnav>
}

}else{return(
    <LandingNav></LandingNav>)}

}




 function LandingNav(){
    const navigate = useNavigate()

    
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button>Courses</button></p>
            <p className="navbar-elements navbar-border"><button>Events</button></p>
            <p className="navbar-elements navbar-border"><button>Blogs</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            <p className="navbar-elements navbar-border"><button onClick={()=> navigate('/admin/signup')}>Create Courses</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="mx-5 hover:text-green-500 " onClick={()=> navigate('/signin')}>Log in</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> navigate('/user/signup')}>join us</button>
        </div>
    </nav>
    </div>
  
}


export const Usernav = (props:any)=>{
    const setUser = useSetRecoilState(userState);
    const navigate= useNavigate();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button onClick={()=>{navigate("/user")}}>Courses</button></p>
            <p className="navbar-elements navbar-border"><button onClick={()=>{navigate("/myLearnings")}}>my Learnings</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            
        </div>
        <div className="right-0 text-center py-1">
            <button className="px-10 md:pt-2 lg:pt-0 hover:bg-white hover:text-black" >{props.name}</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {localStorage.setItem("token", "");
                            setUser({
                                isLoading: false,
                                userEmail: ""
                            })
                            navigate("/");
                        }}>Log out</button>
        </div>
    </nav>
    </div>
}





export const Adminnav = (props:any)=>{
    const setAdmin = useSetRecoilState(adminState);
    const navigate= useNavigate();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button onClick={()=>{navigate("/admin/courses")}}>Your Courses</button></p>
            <p className="navbar-elements navbar-border"><button onClick={()=>{navigate("/admin/createcourse")}}>Create Course</button></p>
            <p className="navbar-elements navbar-border"><button>Manage Community</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="lg:px-10 md:pt-2 lg:pt-0 hover:bg-white hover:text-black" >{props.name}</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {localStorage.setItem("token", "");
                            setAdmin({
                                isLoading: false,
                                userEmail: ""
                            });
                            navigate("/");
                        }}>Log out</button>
        </div>
    </nav>
    </div>
}







