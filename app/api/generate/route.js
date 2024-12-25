import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Check if the API key exists in environment variables
    const apiKey = process.env.GIMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key is missing" }, { status: 400 });
    }

 console.log("API Key:", process.env.GIMINI_API_KEY);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json();
    const prompt = data.body;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Ensure that you invoke .text() method
    const output = await response.text();

    return NextResponse.json({ output: output });

  } catch (error) {
    console.error("Error using the GIMINI API:", error);
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
  }
}
