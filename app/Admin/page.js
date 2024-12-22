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
      <h1>Create a Job Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}
