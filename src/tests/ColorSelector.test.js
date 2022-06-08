import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ColorSelector from '../../src/components/ColorSelector';

test('renders ColorSelector component', () => {
  const handleChangeColor = jest.fn();
  const component = render(<ColorSelector handleChangeColor={handleChangeColor} />);
  expect(component).toBeTruthy();
});
