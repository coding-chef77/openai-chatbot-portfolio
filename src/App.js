import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [isDayMode, setDayMode] = useState(true); // create state for mode

  useEffect(() => {
    // Equivalent to 'componentDidMount' and 'componentDidUpdate'
    document.body.classList.add(isDayMode ? "day-mode" : "night-mode");
    if (!isDayMode) {
      document.body.classList.remove("day-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isDayMode]); // Re-run effect when 'isDayMode' changes

  const switchMode = () => setDayMode(!isDayMode); // function to switch the mode

  return (
    <div className="App">
      <Layout switchMode={switchMode} isDayMode={isDayMode} />
    </div>
  );
}

export default App;
