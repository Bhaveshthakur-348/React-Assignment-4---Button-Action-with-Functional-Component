import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [showCont, setCont] = React.useState(false);
  let showPara = () => {
    setCont(true);
  };

  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={showPara}></button>
      {showCont ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
