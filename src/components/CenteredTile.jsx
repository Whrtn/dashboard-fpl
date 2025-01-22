import React from "react";

const CenteredTile = ({ children }) => {
  return (
    <div className="bg-offwhite p-10">
      <div className="bg-white mx-auto px-20 py-28 rounded-lg shadow-lg w-[500px] h-auto flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default CenteredTile;
