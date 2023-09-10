import {CourseCard} from "../User/CourseCard"
import Carousel from "better-react-carousel"
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
            },{
                name:"Full-Stack Cohort",
                desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
                img:"/course2.jpg",
                price:"$599"
                },{
                    name:"Full-Stack Cohort",
                    desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
                    img:"/course2.jpg",
                    price:"$599"
                    },{
                        name:"Full-Stack Cohort",
                        desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
                        img:"/course2.jpg",
                        price:"$599"
                        },{
                            name:"Full-Stack Cohort",
                            desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
                            img:"/course2.jpg",
                            price:"$599"
                            }
  ]




export const PageCourse = () =>{
    return(<div className="pt-60 bg-black w-full h-full">
        <Allcourses></Allcourses>
        <Allcourses></Allcourses>
        <Allcourses></Allcourses>
        <Allcourses></Allcourses>
        <Allcourses></Allcourses>
    </div>)
}

const Allcourses = (props:any)=>{
    return(
        <div className="bg-black w-full">
              <h1 className="text-white mx-3 py-3 font-mono font-bold text-3xl border-b-8 w-fit rounded-lg">Courses on Full Stack Devolepment</h1>
            <div className="p-8 ">
<Carousel cols={5} rows={1} showDots={true} gap={20}>
       {Courses.map((test:any)=>
       {
        return <Carousel.Item> 
           <CourseCard 
            Cname = {test.name}
            desc= {test.desc}
            img = {test.img}
            price = {test.price}
           ></CourseCard>
           </Carousel.Item>
       })
       } 
       </Carousel>
       </div>
       </div>
    )
}




