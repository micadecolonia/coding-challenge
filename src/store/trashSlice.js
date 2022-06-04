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
        totalNotes: state.trash.length + 1,
        trash: [...state.trash, action.payload],
      };
      return toTrash;
    },
    removeFromTrash: (state, action) => {
      // TODO Add note back to notes
      const removeFrom = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.trash.length,
        trash: state.trash.filter((note) => note.id !== action.payload.id),
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
