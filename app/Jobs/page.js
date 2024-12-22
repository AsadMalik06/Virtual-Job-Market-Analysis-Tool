// app/browse-jobs/page.js
'use client';

import { useEffect, useState } from 'react';

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch('/api/getJobs');
      const data = await response.json();
      setJobs(data);
    }

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Browse Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{new Date(job.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
