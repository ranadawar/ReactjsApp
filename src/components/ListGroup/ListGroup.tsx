import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onPressItem: (item: string) => void;
}

function ListGroup(
  { items, heading, onPressItem }: Props = {
    items: [],
    heading: "This",
    onPressItem: () => {},
  }
) {
  //use state to keep track of the selected index
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handlePress = (index: number, item: string) => {
    setSelectedIndex(index);
    onPressItem && onPressItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item, index) => {
            return (
              <li
                key={item}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => handlePress(index, item)}
              >
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
