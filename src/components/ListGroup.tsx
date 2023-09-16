import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function ListGroup() {
  const [selected, setSelected] = React.useState(-1);
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
    "And a fifth one",
  ];

  const handleClick = (event: React.MouseEvent) => {
    console.log("clicked");
    console.log(event);
  };

  return (
    <>
      <h1>Hello</h1>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item) => {
            return (
              <li key={item} className="list-group-item" onClick={handleClick}>
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group">
          <li className="list-group-item">No items</li>
        </ul>
      )}
    </>
  );
}

export default ListGroup;
