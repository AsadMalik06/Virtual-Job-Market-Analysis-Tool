import { MongoClient } from 'mongodb';

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db();
  cachedDb = db;

  return { db };
}
