import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Chatbot from "../Chatbot/Chatbot";
import Message from "../Message/Message";

function Layout() {
  return (
    <>
      <Navbar />
      <About />
      <Chatbot />
      <Message />
      <Card />
      <Footer />
    </>
  );
}

export default Layout;
