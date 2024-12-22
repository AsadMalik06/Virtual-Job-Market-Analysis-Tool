import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
export default Job;
