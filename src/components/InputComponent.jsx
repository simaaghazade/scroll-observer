import React from 'react';

const InputComponent = ({ value, onChange }) => {
  const handleChange = (e) => {
    let v = parseInt(e.target.value, 10) || 10;
    if (v < 10) v = 10;
    if (v > 50) v = 50;
    onChange(v);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Number of boxes (10–50):</label>
      <input
        type="number"
        min="10"
        max="50"
        value={value}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-24"
      />
    </div>
  );
};

export default InputComponent;
