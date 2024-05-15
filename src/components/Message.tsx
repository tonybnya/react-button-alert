import React from "react";

// PascalCasing
const Message = () => {
  // JSX: JavaScript XML
  const name = "React";
  if (name) return <h1>Hello, {name}!</h1>;
  return <h1>Hello, World!</h1>;
};

export default Message;

