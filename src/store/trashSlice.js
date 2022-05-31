import { createSlice } from '@reduxjs/toolkit';
import { initialTrashState } from './initState';

const initialState = initialTrashState;

const trashSlide = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    addToTrash: (state, action) => {
      const toTrash = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length + 1,
        trash: [...state.notes, action.payload],
      };
      return toTrash;
    },
    removeFromTrash: (state, action) => {
      const removeFrom = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length,
        trash: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        }),
      };
      return removeFrom;
    },
    removeAllTrash: (state) => {
      const removeAll = {
        ...state,
        totalNotes: 0,
        trash: [],
      };
      return removeAll;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToTrash, removeFromTrash, removeAllTrash } = trashSlide.actions;

export default trashSlide.reducer;
