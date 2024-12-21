"use client"
import React, { useState } from 'react';

const Page = () => {
  // Define the prompt to generate bullet-point skills
  const prompt = "Generate 20 top digital skills that will be the most profitable and have a lot of job opportunities in 2025. Your response should be only in bullet points. Only give me the list of those skills, no need to say any additional words. Give a to-the-point answer.";

  const [output, setOutput] = useState("The most profitable and trending skills will be generated here.");
  const [loading, setLoading] = useState(false); // State to manage loading

  // Function to generate skills
  const generateText = async () => {
    setLoading(true); // Set loading to true when the generation starts

    try {
      const response = await fetch('/api/generate', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ body: prompt })
      });

      const data = await response.json(); // Await the JSON response

      if (response.ok) {
        // Split the output into an array based on newlines or bullets and format it into HTML
        const skills = data.output
          .split('\n') // Split by newline, assuming the API sends each skill in a new line
          .filter(skill => skill.trim() !== "") // Remove any empty lines
          .map(skill => <li key={skill}>{skill.trim()}</li>); // Map each skill into a <li> tag

        setOutput(skills); // Set the formatted list of skills
      } else {
        setOutput(data.error || "An error occurred while generating text"); // Handle errors properly
      }
    } catch (error) {
      console.log(error);
      setOutput("An error occurred while generating text");
    } finally {
      setLoading(false); // Set loading to false once the request is done
    }
  };

  return (
    <div className="page">
      <h1 className="text-center md:text-3xl font-bold text-2xl text-gray-700 mb-4 mt-10">
        Skills Tracking System
      </h1>

      <p className="text-center p-5">
        Now you can use our Artificial Intelligence-based skills recommendation system to explore opportunities for yourself.
      </p>

      <div className="flex justify-center">
        {/* You can add a logo or any other elements here if needed */}
      </div>

      <div className="flex justify-center">
        <div className="md:flex justify-center p-4 my-10 w-[80vw] gap-6">
          <div className="flex flex-col items-center">
            <button onClick={generateText} className="md:w-[200px] mb-4 text-white bg-green-700 hover:bg-green-800 cursor-pointer p-2 rounded">
              Trending Skills
            </button>

            <div className="cursor-pointer md:min-w-[500px] text-justify md:border-2 rounded-3xl p-5">
              {loading ? <img src="/anim.GIF" className="mx-auto" width={100} alt="" /> : <ul>{output}</ul>}
              {/* Show loading GIF when generating, otherwise show the output */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
