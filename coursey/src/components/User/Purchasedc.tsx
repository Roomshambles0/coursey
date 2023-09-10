const Courses = [
    {name:"Full-Stack Cohort",
     desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
     img:"/course2.jpg",
     price:"$599"
  },
  {name:"Full-Stack Cohort",
  desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
  img:"/course2.jpg",
  price:"$599"
  },{
  name:"Full-Stack Cohort",
  desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
  img:"/course2.jpg",
  price:"$599"
  },
  {
name:"Full-Stack Cohort",
desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
img:"/course2.jpg",
price:"$599"
},
    {name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    },
    {
    name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    },
    {
    name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    },
    {
    name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    },
    {
    name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    },
    {
    name:"Full-Stack Cohort",
    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
    img:"/course2.jpg",
    price:"$599"
    }
  ]



export const Purchased = ()=>{

    return(<div>  
        <div className="bg-black text-white h-96 font-mono font-semibold text-7xl pt-64 flex justify-center px-10">my Learnings</div> 
    <div className="course-card-grid grid grid-cols-3 gap-10">
{Courses.map((test:any)=>
       {
        return <div className="p-5">
           <CourseCard 
            Cname = {test.name}
            desc= {test.desc}
            img = {test.img}
           ></CourseCard>
           </div>
       })
       } 
    </div> </div> )
}



export const CourseCard = (props:any) =>{
    return <div className=" ">
    <div className="mx-auto w-full  bg-black border-solid border-2 border-white rounded-lg text-white overflow-hidden shadow-md ">
    <div className="md:shrink-0 flex h-full ">
    <img className=" object-cover rounded h-full w-full" src={props.img} alt="" />
    </div>
    <div className="p-8">
    <h1 className="text-5xl font-bold pb-5">{props.Cname}</h1>
    <p className="text-stone-400 text-left ...">{props.desc}</p>
    </div>
    <div className="">
    <button className="mx-8 mb-5 p-2 border rounded-lg font-semibold font-mono hover:bg-white hover:text-black">Start Learning</button>
   <ProgressBar></ProgressBar>
    </div>
    </div>
    </div>
    }


const ProgressBar = ()=>{
    return <div className="relative mb-5 ml-8">
    
      <div className="flex h-3 items-center justify-center rounded-full bg-white text-xs leading-none font-semibold font-mono" style={{width: "85%"}}>
        <span className="p-1 text-black">85%</span>
      </div>
    </div>
 
}