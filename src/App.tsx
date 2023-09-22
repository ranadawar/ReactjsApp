import React from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div>
      {isClicked && (
        <Alert onPress={() => setIsClicked(false)}>
          This is an alert remove it when you see it
        </Alert>
      )}
      <Button color="primary" onPress={() => setIsClicked(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
