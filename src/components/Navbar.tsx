import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* Logo */}
      <div className="text-xl">
        <Link href="/">Bobby Pizzaria</Link>
      </div>
      {/* Mobile menu */}
      <div></div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
