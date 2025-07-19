import { NextFunction, Request, Response } from "express";
import * as noteService from "../services/noteservices";

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      //   return res
      //     .status(400)
      //     .json({ message: "Title and content are required" });
      return next({ status: 400, message: "Title and content are required" });
    }

    const note = await noteService.createNote({ title, content });
    return res.status(201).json(note);
  } catch (error) {
    console.error("Create note error:", error);
    return next(error);
    // return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    return next(error);
    // res.status(500).json({ message: "Failed to fetch notes", error });
  }
};

export const updateNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await noteService.updateNote(id, { title, content });

    if (!updatedNote) {
      return next({ status: 404, message: "Note not found" });
      //   return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    return next(error);

    // res.status(500).json({ message: "Failed to update note", error });
  }
};

export const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const deletedNote = await noteService.deleteNote(id);

    if (!deletedNote) {
      return next({ status: 404, message: "Note not found" });
      //   return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return next(error);
    // res.status(500).json({ message: "Failed to delete note", error });
  }
};

export const getNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const notes = await noteService.getNotes(page, limit);
    res.json({ page, limit, notes });
  } catch (error) {
    next(error);
  }
};
