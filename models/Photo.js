import mongoose, { Schema, model, models } from "mongoose";

const PhotoSchema = new Schema(
  {
    title: { type: String },
    slug: { type: String, required: true },
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// Ensure the model is only created once
const Photo = models?.Photo || model("Photo", PhotoSchema, "photos");

export default Photo;
