import {BsGoogle} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"


export default function Signup(){
    return (
        <div className="mx-auto w-full  bg-black  border-white text-white overflow-hidden shadow-md h-full ">
        <div className="p-8">
        <p className="  font-mono font-semibold text-4xl py-5 flex justify-center ">Start your journey with 100xdevs</p>
        <h1 className="text-white font-mono font-semibold text-7xl py-5 flex justify-center px-10">Be.A.100xDEV</h1>
        </div>
        <SignupCard></SignupCard>
        </div>
    )
}




function SignupCard(){

    return <div className="md:shrink-0 flex justify-center h-full w-full ">
    <label className="block border p-5 m-10 rounded-lg">
        <div className="p-5  flex flex-col justify-center border-b  w-full ">
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGoogle size={30} className="mx-2"/><p className="px-2">Continue with Google</p></div></button>
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGithub size={30} className="mx-2"/><p className="px-2">Continue with Gitub</p></div></button>
        </div>
        <p className=" flex justify-center font-mono font-semibold ">or register with email here</p>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Name
  </span>
  <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Roronoa zoro" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Mobile
  </span>
  <input type="phone number" name="number" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="+91 1223456798" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Email
  </span>
  <input type="email" name="email" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Password
  </span>
  <input type="Password" name="email" className="my-2 px-3 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1"/>
  <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white">Submit</button>
</label>
    </div>
}