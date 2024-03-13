import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black w-full h-24 ">
        <Link href="/">
          <h1 className="text-[#f13a01] font-semibold text-3xl ml-36">Pizza<span className="text-white">Pulse</span></h1>
        </Link>
        <nav className="flex gap-8 items-center text-white font-semibold mr-28">
          <Link href="/">Home</Link>
          <Link href="/">menu</Link>
          <Link href="/">about</Link>
          <Link href="/">contact</Link>
          <Link
            href=""
            className="bg-[#f13a01] rounded-full text-white px-8 py-2"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
