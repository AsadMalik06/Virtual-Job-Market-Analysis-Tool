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
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Admin - Job Posting Management</h1>
      </header>

      <main className="flex-grow">
        <section id="job-posting-section" className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Add New Job Posting</h2>
          <form onSubmit={handleAddJob} className="bg-white p-6 shadow-md rounded-md">
            <label htmlFor="job-title" className="block text-sm font-medium mb-2">Job Title</label>
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <label htmlFor="job-description" className="block text-sm font-medium mb-2">Job Description</label>
            <textarea
              id="job-description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              rows="4"
              required
            ></textarea>
            <label htmlFor="job-location" className="block text-sm font-medium mb-2">Job Location</label>
            <input
              type="text"
              id="job-location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <label htmlFor="job-salary" className="block text-sm font-medium mb-2">Salary</label>
            <input
              type="text"
              id="job-salary"
              value={jobSalary}
              onChange={(e) => setJobSalary(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Add Job
            </button>
          </form>
        </section>

        {/* Job Listings */}
        <section id="job-listings-section">
          <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Job Title</th>
                <th className="p-2 text-left">Location</th>
                <th className="p-2 text-left">Salary</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobPosts.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">No job postings available.</td>
                </tr>
              ) : (
                jobPosts.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="p-2">{job.title}</td>
                    <td className="p-2">{job.location}</td>
                    <td className="p-2">{job.salary}</td>
                    <td className="p-2 flex space-x-2">
                      <button
                        onClick={() => handleEditJob(job.id)}
                        className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Virtual Job Market Tool</p>
      </footer>
    </div>
  );
}

// Dynamically disable SSR for this page
export default dynamic(() => Promise.resolve(AdminPage), { ssr: false });
