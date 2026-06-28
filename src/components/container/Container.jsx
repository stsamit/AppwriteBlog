import React from "react";

function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
  // main problem was here that the header was not rendering
}

export default Container;
