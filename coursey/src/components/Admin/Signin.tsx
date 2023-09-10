import {BsGoogle} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"

export default function Adminsignin(){
    return (<div>
        <div className="mx-auto w-full  bg-stone-800  border-white text-white overflow-hidden shadow-md h-full pt-48">
        <div className="p-5">
        <p className="  font-mono font-semibold text-4xl pt-5 flex justify-center ">Sign in to <i className=" mx-5 text-black bg-white border  text-center ">100xDEVS</i></p>
        </div>
   <SigninCard></SigninCard>
   </div>
    </div>
    )
}




function SigninCard(){

    return <div className="md:shrink-0 flex justify-center h-full w-full ">
    <label className="block border p-5 m-10 rounded-lg">
        <div className="p-5  flex flex-col justify-center border-b mb-5 w-full ">
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGoogle size={30} className="mx-2"/><p className="px-2">Continue with Google</p></div></button>
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGithub size={30} className="mx-2"/><p className="px-2">Continue with Gitub</p></div></button>
        </div>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Email
  </span>
  <input type="email" name="email" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Password
  </span>
  <input type="Password" name="email" className="my-2 px-3 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1"/>
  <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white">Signin</button>
</label>
    </div>
    
}