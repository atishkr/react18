import Button from "./components/Button";
import DismissAlert from "./components/DismissAlert";
import React, { useState } from "react";
function App() {
  const [isAlertVisible, setAlertVisivble] = useState(false);
  const clickHandler = () => {
    setAlertVisivble(!isAlertVisible);
  };
  return (
    <div>
      {isAlertVisible && (
        <DismissAlert onClose={clickHandler}>Hello World</DismissAlert>
      )}

      <Button color="primary" onClick={clickHandler}>
        {" "}
        Click Me
      </Button>
    </div>
  );
}

export default App;
