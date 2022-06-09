import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AddNote from '../components/AddNote';

test('renders AddNote component', () => {
  const handleAddNote = jest.fn();
  const component = render(<AddNote handleAddNote={handleAddNote} />);
  expect(component).toBeTruthy();
});
