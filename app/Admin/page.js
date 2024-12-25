// app/create-job/page.js
'use client';

import { useState } from 'react';

export default function CreateJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/createJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      alert('Job post created!');
      setTitle('');
      setDescription('');
    } else {
      alert('Failed to create job post');
    }
  };

  return (
    <div>
      <h1 className="text-gray-700 text-center font-bold text-3xl my-10" >Create a Job Post</h1>

      <div className='flex justify-center   p-5'>


        <form onSubmit={handleSubmit}>

          <div className='mb-6 flex gap-8'>
            <label htmlFor="title">Job Title</label>
            <input
            placeholder='Enter Job Title'
            className='p-2 rounded'
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>


          <div className='flex flex-col gap-3 mb-6'>
            <label htmlFor="description">Job Description</label>
            <textarea
            className='p-2 rounded-xl'
            placeholder='Enter Job Description'
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
            ></textarea>
          </div>




          <button className='text-white bg-green-700 p-2 rounded hover:bg-green-800 cursor-pointer' type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
}
