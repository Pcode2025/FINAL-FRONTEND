import { connectDB } from "@/lib/mongodb";
import Photo from "@/models/Photo";

export default async function handler(req, res) {
  await connectDB(); // Make sure the database is connected

  if (req.method === "GET") {
    try {
      const photos = await Photo.find(); // Fetch data safely
      res.status(200).json(photos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch photos" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
