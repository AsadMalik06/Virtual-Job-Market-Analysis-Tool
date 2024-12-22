// pages/jobs.js
import { connectToDatabase } from '../lib/mongoose';
import Job from '../models/Job';

export async function getServerSideProps() {
  try {
    const { db } = await connectToDatabase();
    const jobs = await db.collection('jobs').find().toArray();

    return {
      props: {
        jobs: JSON.parse(JSON.stringify(jobs)), // pass jobs as props
      },
    };
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return {
      props: {
        jobs: [],
      },
    };
  }
}

export default function Jobs({ jobs }) {
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
