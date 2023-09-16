import React from "react";

function Message({ name = "Dawar" }) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default Message;
