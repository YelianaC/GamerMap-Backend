import express from "express";
import Game from "../models/Game.js";

const router = express.Router();

// GET - obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - agregar un juego
router.post("/", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - editar un juego
router.put("/:id", async (req, res) => {
  try {
    const updated = await Game.findOneAndUpdate(
      { _id: req.params.id },  // <--- CORRECCIÓN
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - eliminar un juego
router.delete("/:id", async (req, res) => {
  try {
    await Game.findOneAndDelete({ _id: req.params.id }); // <--- CORRECCIÓN
    res.json({ message: "Juego eliminado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
