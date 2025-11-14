import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseYear: { type: Number, required: true },
  developer: { type: String, required: true },
  platforms: { type: [String], required: true },
  desc: { type: String, required: true },
  imageFile: { type: String, required: true }
});

export default mongoose.model("Game", GameSchema);