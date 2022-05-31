import { createSlice } from '@reduxjs/toolkit';
import { initialNoteState } from './initState';

const initialState = initialNoteState;

export const noteSlide = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, action.payload],
      };
      return newNote;
    },
    editNote: (state, action) => {
      const editNote = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        }),
      };
      return editNote;
    },
    deleteNote: (state, action) => {
      const deleteNote = {
        lastNoteDeletedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length - 1,
        // TODO Change that to not filter the note, maybe use a map function
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
      return deleteNote;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, editNote, deleteNote } = noteSlide.actions;

export default noteSlide.reducer;
