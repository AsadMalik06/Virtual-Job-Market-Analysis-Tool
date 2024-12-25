// app/api/createJob/route.js
import dbConnect from '../../../lib/dbConnect';
import Job from '../../../models/Job';

export async function POST(req) {
  await dbConnect();
  const { title, description } = await req.json();

  try {
    const job = new Job({ title, description });
    await job.save();
    return new Response(JSON.stringify(job), { status: 201 });
  } catch (error) {
    return new Response('Failed to create job post', { status: 400 });
  }
}
