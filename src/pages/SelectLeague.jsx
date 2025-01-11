import React from "react";
import CenteredTile from "../components/CenteredTile";
import ConfirmButton from "../components/ConfirmButton";

const SelectLeague = () => {
  return (
    <CenteredTile>
      <h1 className="text-2xl font-bold mb-6">Select a League</h1>
      <p className="cursor-pointer p-2 hover:bg-offwhite w-full">
        AFC Bumcrumb
      </p>
      <p className="cursor-pointer p-2 hover:bg-offwhite w-full">League Name</p>
      <p className="cursor-pointer p-2 hover:bg-offwhite w-full mb-3">
        Radius IT
      </p>
      <ConfirmButton name="Continue" />
    </CenteredTile>
  );
};

export default SelectLeague;
