// app/Jobs/page.js
import { connectToDatabase } from '../../lib/mongoose';
import Job from '../../models/Job';

async function getJobs() {
  const { db } = await connectToDatabase();
  const jobs = await db.collection('jobs').find().toArray();
  return jobs;
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div>
      <h1>Browse Jobs</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>{job.title}</li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
}
