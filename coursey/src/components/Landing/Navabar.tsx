

export default function Navbar(){
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="px-4 mx-20 text-black bg-white border py-3 text-center ">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button>Courses</button></p>
            <p className="navbar-elements navbar-border"><button>Events</button></p>
            <p className="navbar-elements navbar-border"><button>Blogs</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            <p className="navbar-elements navbar-border"><button>Create Courses</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="mx-5 hover:text-green-500 ">Log in</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full">join us</button>
        </div>
    </nav>
    </div>
  
}