"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  // State for Trending Skills and Skill Recommendations
  const [trendingSkills, setTrendingSkills] = useState('');
  const [skillRecommendations, setSkillRecommendations] = useState('');
  const [isClient, setIsClient] = useState(false); // State to check if it's the client side

  // Set isClient to true once the component has mounted (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to simulate fetching trending skills
  const handleFetchTrendingSkills = () => {
    // In a real application, you'd fetch data from an API here
    setTrendingSkills('JavaScript, Python, React, Node.js, SQL');
  };

  // Function to handle skill recommendation form submission
  const handleSkillRecommendationSubmit = (event) => {
    event.preventDefault();
    const skillsInput = event.target.skillsInput.value;
    // In a real application, you'd process the input and generate recommendations
    setSkillRecommendations(`Recommended skills based on your input: ${skillsInput.split(',').map(skill => skill.trim()).join(', ')}`);
    setSkillRecommendations(`Recommended skills based on your input: ${skillsInput.split(',').map(skill => skill.trim()).join(', ')}`);
    setSkillRecommendations(`Recommended skills based on your input: ${skillsInput.split(',').map(skill => skill.trim()).join(', ')}`);
    setSkillRecommendations(`Recommended skills based on your input: ${skillsInput.split(',').map(skill => skill.trim()).join(', ')}`);
  };

  // Ensure content only renders on the client side
  if (!isClient) {
    return null; // Avoid rendering anything on the server side to prevent hydration mismatch
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 justify-between flex text-white p-6">
        <h1 className="text-3xl font-bold">Skills Tracker Module</h1>
        <a href='/Admin'><button className=''>Job Posting Management</button></a> 
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Trending Skills Section */}
        <section id="trending-skills-section" className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Trending Skills</h2>
          <button
            onClick={handleFetchTrendingSkills}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Show Trending Skills
          </button>
          <div id="trending-skills-output" className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>{trendingSkills || 'Click the button to fetch trending skills!'}</p>
          </div>
        </section>

        {/* Skill Recommendations Section */}
        <section id="recommendations-section">
          <h2 className="text-xl font-semibold mb-4">Skill Recommendations</h2>
          <form
            id="recommend-skills-form"
            onSubmit={handleSkillRecommendationSubmit}
            className="bg-white p-6 shadow-md rounded-md"
          >
            <label htmlFor="skills-input" className="block text-sm font-medium mb-2">
              Enter Your Skills (comma-separated):
            </label>
            <input
              type="text"
              id="skills-input"
              name="skillsInput"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="e.g., Java, Python, React"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Get Recommendations
            </button>
          </form>
          <div id="recommendation-output" className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>{skillRecommendations || 'Enter your skills to get personalized recommendations!'}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Virtual Job Market Tool</p>
      </footer>
    </div>
  );
}
