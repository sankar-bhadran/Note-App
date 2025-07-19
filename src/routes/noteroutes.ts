import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notecontrollers";

const router = express.Router();

router.post("/addnote", createNote); // POST /api/notes
router.get("/allnotes", getAllNotes);
router.put("/updatenotes/:id", updateNote);
router.delete("/deletenote/:id", deleteNote);

export default router;
