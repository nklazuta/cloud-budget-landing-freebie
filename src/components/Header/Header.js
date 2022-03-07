import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Language from "../Language/Language";
import Auth from "../Auth/Auth";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Language />
      <Auth />
    </header>
  );
}

export default Header;
