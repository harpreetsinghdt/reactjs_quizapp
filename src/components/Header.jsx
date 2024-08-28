import React from "react";
import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="Logo" />
      <h1>Quiz App</h1>
    </header>
  );
};

export default Header;
