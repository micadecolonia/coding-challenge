import { configureStore } from '@reduxjs/toolkit';
import notesSlices from './notesSlice';
import trashSlices from './trashSlice';

const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('applicationState', JSON.stringify(getState()));
  return result;
};

// eslint-disable-next-line consistent-return
const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: {
    notes: notesSlices,
    trash: trashSlices,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
