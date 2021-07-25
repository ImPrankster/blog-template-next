import React from "react";
import Link from "next/link";
import style from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/ passHref">
          <h2>ImPrankster</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
