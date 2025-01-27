import React from "react";

const CenteredTile = ({ children }) => {
  return (
    <div className="bg-offwhite p-10">
      <div className="bg-white mx-auto sm:px-20 px-8 py-20 rounded-lg shadow-lg sm:w-[500px] w-[320px] h-auto min-h-[400px] flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default CenteredTile;
