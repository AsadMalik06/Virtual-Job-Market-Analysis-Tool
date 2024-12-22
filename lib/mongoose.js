// lib/mongoose.js
import { MongoClient } from 'mongodb';

// This variable will cache the database connection
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  const db = client.db(); // Use default database from URI
  cachedDb = db;

  return { db };
}
