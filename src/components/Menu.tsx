"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/hours" }, // Updated URL for consistency
  { id: 4, title: "Contact", url: "/contact" }, // Updated URL for consistency
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false; // Assume this might be replaced with a user state or context

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="open menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }} // Add cursor style for better UX
        />
      ) : (
        <Image
          src="/close.png"
          alt="close menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          style={{ cursor: "pointer" }} // Add cursor style for better UX
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] z-10 flex flex-col gap-8 items-center justify-center text-3xl">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
