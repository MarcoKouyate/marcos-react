import React from "react";
import Prompt from "./Prompt";
import LogConsole from "./LogConsole";

function Terminal() {
  return (
    <>
      <LogConsole />
      <Prompt />
    </>
  );
}

export default Terminal;
