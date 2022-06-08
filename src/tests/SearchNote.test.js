import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SearchNote from '../../src/components/SearchNote';

test('renders SearchNote component', () => {
  const handleSearchNote = jest.fn();
  const component = render(<SearchNote handleSearchNote={handleSearchNote} />);
  expect(component).toBeTruthy();
});
