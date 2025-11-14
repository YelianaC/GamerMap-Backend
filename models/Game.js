const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  releaseYear: {
    type: Number,
required: true
  },
  developer: {
    type: String,
    required: true
  },
  platforms: {
    type: [String],   // ← Esto representa tu array de plataformas
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imageFile: {
    type: String,
    required: true
  }
});

// Exportar modelo
module.exports = mongoose.model("Game", GameSchema);