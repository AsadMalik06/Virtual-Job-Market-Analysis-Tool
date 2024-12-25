// app/browse-jobs/page.js
'use client';

import { useEffect, useState } from 'react';

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch('/api/getJobs');
      const data = await response.json();
      setJobs(data);
    }


    fetchJobs();
    setloading(false);
  }, []);

  return (
    <div>
      <h1 className="text-gray-700 text-3xl font-bold text-center mb-3 mt-5">Latest Hirings Here</h1>


      <ul className="w-full flex-col items-center justify-center flex md:flex-row flex-wrap  gap-5 ">

        {loading && <div>
          
          <img src="/anim.gif" width={100} alt="" />
          
          </div>}

{jobs.map((job)=>(

<li className={`bg-gray-200 overflow-y-scroll my-2 md:my-6 h-[200px]  hover:scale-105  overflow-hidden  transition-all hover:shadow-lg cursor-pointer w-[80vw] md:w-[25vw] border-indigo-950 rounded-xl p-4`} key={job._id}>

  <h2 className='text-xl text-center bg-gray-600 text-white rounded p-2 mb-6'>{job.title}</h2>
  <hr className='h-[2px] bg-black my-4' />
  <p className='mb-4'>{job.description}</p>
  
  <p className='relative bottom-0'>Date: {new Date(job.createdAt).toLocaleString()}</p>

</li>

))}

        
      </ul>
    </div>
  );
}
