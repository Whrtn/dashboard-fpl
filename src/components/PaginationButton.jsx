import React from "react";

const PaginationButton = ({ text, onclick, isDisabled, disabledStyle }) => {
  return (
    <button
      className={`p-2 bg-white rounded-xl shadow-neutral-400 shadow-lg w-8 text-center ${disabledStyle}`}
      onClick={onclick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default PaginationButton;
