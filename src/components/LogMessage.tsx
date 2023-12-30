import React from "react";

interface Props {
  path: string;
  children: string;
}

function LogMessage({ path, children }: Props) {
  return (
    <p className="text-white font-mono">
      <span className="text-cyan-200">{path + "> "}</span> {"$ " + children}
    </p>
  );
}

export default LogMessage;
