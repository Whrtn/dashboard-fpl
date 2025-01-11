import React from "react";

const CenteredTile = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-offwhite">
      <div className="bg-white px-20 rounded-lg shadow-lg w-[500px] h-[450px] flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default CenteredTile;
