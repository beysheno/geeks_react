import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";

export default function MainPage() {
  return (
    <div>
      <Header />
      <h2 className="btn">MainPage</h2>
      <Button action={"Open"} color={"primary"} />
      <Button action={"Close"} color={"error"} />
      <Button action={"Save"} color={"secondary"} />

      <Footer />
    </div>
  );
}
