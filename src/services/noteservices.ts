import Note from "../models/notes";
import { NoteInput } from "../types/notetypes";

export const createNote = async (data: NoteInput) => {
  const note = await Note.create({
    title: data.title,
    content: data.content,
  });
  return note;
};

export const getAllNotes = async () => {
  const notes = await Note.find();
  return notes;
};

export const updateNote = async (id: string, data: NoteInput) => {
  const updatedNote = await Note.findOneAndUpdate(
    { id },
    {
      title: data.title,
      content: data.content,
      updatedAt: new Date(),
    },
    { new: true }
  );
  return updatedNote;
};

export const deleteNote = async (id: string) => {
  const deletedNote = await Note.findOneAndDelete({ id });
  return deletedNote;
};

export const getNotes = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  return await Note.find().skip(skip).limit(limit);
};
