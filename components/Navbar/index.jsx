"use client";
import Link from "next/link";
import { menuItems } from "..";

const Navbar = () => {
  return (
    <header>
      <nav className="navbarUl">
        {menuItems.map((item) => (
          <Link key={item.title} href={item.url}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
