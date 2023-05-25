import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Chatbot from "../Chatbot/Chatbot";
import Message from "../Message/Message";
import Contact from "../Contact/Contact";
import Card1 from "../Cards/Card1/Card1";

function Layout({ switchMode, isDayMode }) {
  return (
    <>
      <Navbar switchMode={switchMode} isDayMode={isDayMode} />
      <About />
      <Chatbot />
      <Message />
      <Card1 />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
