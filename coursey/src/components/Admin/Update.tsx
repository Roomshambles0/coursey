import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { courseState } from "../../store/atoms/course";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";
import { courseTitle, coursePrice, isCourseLoading, courseImage,courseDescription,coursePublish, courseDetails} from "../../store/selectors/course";


export const Update = ()=>{
  let { id } = useParams();
    return(<div className="mx-auto w-full  bg-stone-800   border-white text-white overflow-hidden shadow-md h-full pt-60">
    <div className="p-8">
    <p className="font-mono font-bold text-4xl pt-5 flex justify-center ">Update Course</p>

        </div>
    <UpdateCard id = {id}></UpdateCard>
    </div>)
}




const UpdateCard = (props:any)=>{
  const [coursesDetails,setCourse] = useRecoilState(courseState);
  const init = async () => {
    const response = await axios.get(`http://localhost:3001/admin/course/` + props.id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = response.data.course;
    console.log(data);
    setCourse({
        isLoading: false,
        course: data
    })
}

useEffect(() => {
    init();
}, []);


const [title,setTitle] = useState(coursesDetails.course.title);
const [description, setDescription] = useState(coursesDetails.course.description);
const [image, setImage] = useState(coursesDetails.course.imageLink);
const [price, setPrice] = useState(coursesDetails.course.price);
const [publish, setPublish] = useState(coursesDetails.course.published);

    return( <div className="md:shrink-0 flex justify-center h-full w-full bg-black">
    <label className="block border p-5 m-10 rounded-lg">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Title
  </span>
  <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" value={title} onChange={(e) => {
setTitle(e.target.value);
                }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Description
  </span>
  <input type="Description" name="description" className="my-2 pr-48 pl-2 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" value={description} onChange={(e) => {
setDescription(e.target.value);
                }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Price
  </span>
  <input type="price" name="number" className="my-2 pr-48 pl-2 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" value={price} onChange={(e) => {
setPrice(e.target.value);
                }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Image Link
  </span>
  <input type="link" name="email" className="my-2 px-3 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" value={image} onChange={(e) => {
setImage(e.target.value);
                }}/>
  <div><fieldset>
    <legend className=" block text-sm font-medium text-slate-100 after:content-['*'] after:ml-0.5 after:text-red-500">Published status</legend>
  
    <input id="draft" className="peer/draft" type="radio" name="status" value="false" checked={publish == "false"} onChange={(e) => {
setPublish(e.target.value);
                }}/>
    <label htmlFor="draft" className="peer-checked/draft:text-white text-sm font-medium text-slate-400 pr-2 pl-2" >false</label>
  
    <input id="published" className="peer/published " type="radio" name="status" value="true" checked={publish == "true"} onChange={(e) => {
setPublish(e.target.value);
                }}/>
    <label htmlFor="published" className="peer-checked/published:text-white text-sm font-medium text-slate-400 pl-2">true</label>
  
    <div className="hidden peer-checked/draft:block text-md font-medium text-slate-100">Drafts are only visible to administrators.</div>
    <div className="hidden peer-checked/published:block text-md font-medium text-slate-100">Your post will be publicly visible.</div>
  </fieldset></div>
  <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white" onClick={async () => {
                    axios.put(`http://localhost:3001/admin/courses/` + props.id, {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: publish,
                        price:price
                    }, {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    });
                    let updatedCourse = {
                        title: title,
                        description: description,
                        imageLink: image,
                        price:price,
                        published:publish
                    };
                    setCourse({course: updatedCourse, isLoading: false});
                }}>Submit</button>
</label>
    </div>
)
}