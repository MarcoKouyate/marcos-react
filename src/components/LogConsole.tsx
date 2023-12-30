import React from "react";
import LogMessage from "./LogMessage";

function LogConsole() {
  return (
    <>
      <h2>Log Console</h2>
      <div className="bg-gray-950 h-20 p-4">
        <LogMessage path="memoart">
          Ceci est un simple test de terminal avec React
        </LogMessage>
        <LogMessage path="memoart">seconde ligne</LogMessage>
      </div>
    </>
  );
}

export default LogConsole;
