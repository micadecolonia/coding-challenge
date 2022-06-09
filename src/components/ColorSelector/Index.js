/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function ColorSelector({ handleChangeColor }) {
  const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91'];

  // eslint-disable-next-line no-unused-vars
  const handleSelectColor = (indexColor) => {
    const selectedColor = colors[indexColor];
    handleChangeColor(selectedColor);
  };

  return (
    <div>
      <ul className="flex flex-row gap-3 items-center">
        {colors.map((item, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="h-6 w-6 rounded-xl cursor-pointer border border-black hover:opacity-50"
            style={{ backgroundColor: item }}
            // eslint-disable-next-line react/destructuring-assignment
            onClick={() => {
              handleSelectColor(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default ColorSelector;
