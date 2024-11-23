import React from "react";
import Title from "./Title";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <Title name={"Header"} />
      <NavBar link={"Footer"} />
    </div>
  );
}
