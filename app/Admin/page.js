"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically load the Admin page to prevent SSR and hydration errors
const AdminPage = () => {
  // State for managing job postings
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState('');
  const [jobPosts, setJobPosts] = useState([]);

  // Hydration fix: Ensure jobPosts only initialized client-side
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobPosts')) || [];
    setJobPosts(storedJobs);
  }, []);

  // Function to handle adding a new job
  const handleAddJob = (event) => {
    event.preventDefault();

    const newJob = {
      id: jobPosts.length + 1,
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      salary: jobSalary
    };

    // Update jobPosts and store in localStorage
    const updatedJobPosts = [...jobPosts, newJob];
    setJobPosts(updatedJobPosts);
    localStorage.setItem('jobPosts', JSON.stringify(updatedJobPosts));

    // Clear form fields after submission
    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
    setJobSalary('');
  };

  // Function to handle deleting a job
  const handleDeleteJob = (id) => {
    const updatedJobPosts = jobPosts.filter(job => job.id !== id);
    setJobPosts(updatedJobPosts);
    localStorage.setItem('jobPosts', JSON.stringify(updatedJobPosts));
  };

  // Function to handle editing a job
  const handleEditJob = (id) => {
    const jobToEdit = jobPosts.find(job => job.id === id);
    if (jobToEdit) {
      setJobTitle(jobToEdit.title);
      setJobDescription(jobToEdit.description);
      setJobLocation(jobToEdit.location);
      setJobSalary(jobToEdit.salary);
      handleDeleteJob(id); // Remove job temporarily to edit
    }
  };

  return (

    <>
      <h1 className='text-3xl text-gray-700 font-bold text-center my-20'> Page Under Development</h1>
    </>
    
  );
}

// Dynamically disable SSR for this page
export default dynamic(() => Promise.resolve(AdminPage), { ssr: false });
