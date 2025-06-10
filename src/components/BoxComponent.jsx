import React, { forwardRef } from 'react';

const BoxComponent = forwardRef(({ value, pos, isActive }, ref) => (
  <div
    ref={ref}
    data-pos={pos}
    className={
      `flex-shrink-0 w-24 h-24 mx-2 rounded-lg shadow transition-colors duration-300 ` +
      (isActive ? 'bg-green-500' : 'bg-white')
    }
  >
    <div className="flex items-center justify-center h-full text-lg font-semibold">
      {value}
    </div>
  </div>
));

export default BoxComponent;
