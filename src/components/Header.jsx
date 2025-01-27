import React from "react";
import { PiSoccerBallFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg shadow-neutral-300 w-full h-auto">
      <div className="flex sm:justify-start justify-center mx-auto container">
        <Link
          to="/"
          className="py-8 md:text-3xl text-2xl font-bold flex items-center gap-1"
        >
          <PiSoccerBallFill className="md:text-5xl text-3xl text-primary" />
          DashboardFPL
        </Link>
      </div>
    </nav>
  );
};

export default Header;
