// app/api/getJobs/route.js
import dbConnect from '../../../lib/dbConnect';
import Job from '../../../models/Job';

export async function GET() {
  await dbConnect();

  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch jobs', { status: 500 });
  }
}
