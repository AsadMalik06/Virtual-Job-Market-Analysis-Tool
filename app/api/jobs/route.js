import { connectToDatabase } from '../../../lib/mongoose';
import Job from '../../../models/Job';

export async function GET() {
  await connectToDatabase();
  const jobs = await Job.find({}).sort({ date: -1 });
  return Response.json(jobs);
}

export async function POST(req) {
  await connectToDatabase();
  const data = await req.json();
  const newJob = new Job(data);
  await newJob.save();
  return Response.json({ message: 'Job Created' });
}
