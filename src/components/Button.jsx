/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ title, icon = null, color }) {
  return (
    <div className={`flex items-center justify-center min-w-40 py-4 px-5 rounded-full ${color ? "bg-red-500" : "button"}`}>
      <div>
        <button className={`text-md font-semibold text-center uppercase flex items-center gap-2`}>
          {icon} {title}
        </button>
      </div>
    </div>
  );
}

export default Button;
