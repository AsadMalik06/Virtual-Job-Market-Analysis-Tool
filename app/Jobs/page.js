import { connectToDatabase } from '../../lib/mongoose';
import Job from '../../models/Job';

async function fetchJobs() {
  await connectToDatabase();
  const jobs = await Job.find({}).sort({ date: -1 });
  return jobs;
}

export default async function BrowseJobs() {
  const jobs = await fetchJobs();  // Dynamically fetch at runtime

  return (
    <div>
      <h1>Browse Jobs</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
}
