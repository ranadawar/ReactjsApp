import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
    "And a fifth one",
    "And a fifth one",
    "And a fifth one",
  ];

  const handleSelection = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        onPressItem={handleSelection}
        heading="Learning Reactjs"
        items={items}
      />
    </>
  );
}

export default App;
