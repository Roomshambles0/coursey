import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate= useNavigate();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button>Courses</button></p>
            <p className="navbar-elements navbar-border"><button>Events</button></p>
            <p className="navbar-elements navbar-border"><button>Blogs</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            <p className="navbar-elements navbar-border"><button>Create Courses</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="mx-5 hover:text-green-500 " onClick={()=> navigate('/signin')}>Log in</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> navigate('/user/signup')}>join us</button>
        </div>
    </nav>
    </div>
  
}