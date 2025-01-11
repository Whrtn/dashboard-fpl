import React from "react";

const ConfirmButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 bg-primary text-white rounded-md hover:bg-indigo-600 mb-4"
    >
      {name}
    </button>
  );
};

export default ConfirmButton;
