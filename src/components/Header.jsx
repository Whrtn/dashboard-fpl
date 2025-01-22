import React from "react";
import { PiSoccerBallFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg shadow-neutral-300 w-full h-auto">
      <Link
        to="/"
        className="py-10 text-3xl font-bold flex items-center gap-1 container mx-auto"
      >
        <PiSoccerBallFill className="text-5xl text-primary" />
        DashboardFPL
      </Link>
    </nav>
  );
};

export default Header;
