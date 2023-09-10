export const Update = ()=>{

    return(<div className="mx-auto w-full  bg-stone-800   border-white text-white overflow-hidden shadow-md h-full pt-60">
    <div className="p-8">
    <p className="font-mono font-bold text-4xl pt-5 flex justify-center ">Update Course</p>

        </div>
    <UpdateCard></UpdateCard>
    </div>)
}




const UpdateCard = ()=>{

    return( <div className="md:shrink-0 flex justify-center h-full w-full bg-black">
        <label className="block border p-5 m-10 rounded-lg">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Title
      </span>
      <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Full stack cohort" />
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Description
      </span>
      <input type="Description" name="description" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="About course" />
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Price
      </span>
      <input type="price" name="price" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="$499" />
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Image Link
      </span>
      <input type="Password" name="email" className="my-2 px-3 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="/zoro.jpg"/>
       <Radio></Radio>
      <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white">Update</button>
     
    </label>
        </div>
    )
}

const Radio =()=>{
    return(<div><fieldset>
        <legend className=" block text-sm font-medium text-slate-100 after:content-['*'] after:ml-0.5 after:text-red-500">Published status</legend>
      
        <input id="draft" className="peer/draft" type="radio" name="status" checked />
        <label htmlFor="draft" className="peer-checked/draft:text-white text-sm font-medium text-slate-400 pr-2 pl-2">Draft</label>
      
        <input id="published" className="peer/published " type="radio" name="status" />
        <label htmlFor="published" className="peer-checked/published:text-white text-sm font-medium text-slate-400 pl-2">Published</label>
      
        <div className="hidden peer-checked/draft:block text-md font-medium text-slate-100">Drafts are only visible to administrators.</div>
        <div className="hidden peer-checked/published:block text-md font-medium text-slate-100">Your Course will be publicly visible.</div>
      </fieldset></div>)
}