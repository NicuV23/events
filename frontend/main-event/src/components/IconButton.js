"use client";

import React from "react";

const IconButton = ({ icon, onClick, className, ariaLabel }) => {
  return (
    <button
      className={`p-2 rounded ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
