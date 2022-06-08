import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Note from '../../src/components/Note';

test('renders editNote component', () => {
  const isEdit = false;
  const isDelete = false;
  const handleDeleteNote = jest.fn();
  const handleRemoveFromTrash = jest.fn();
  const handleEditNote = jest.fn();
  const handleIsEdit = jest.fn();
  const note = {
    id: 0,
    date: new Date(),
    text: 'Some text',
    color: 'red',
  };
  const component = render(<Note
    note={note}
    handleDeleteNote={handleDeleteNote}
    handleRemoveFromTrash={handleRemoveFromTrash}
    isEdit={isEdit}
    isDelete={isDelete}
    handleIsEdit={handleIsEdit}
    handleEditNote={handleEditNote}
  />);
  expect(component).toBeTruthy();
});
