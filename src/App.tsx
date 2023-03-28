import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Munich", "Pop Muzik"];

  let heading = "Everybody talkin about";
  const text = "Warning!! Warning!!";
  const text2 = "I see you";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVisible2, setAlertVisible2] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {text2} <span className="fw-bolder fst-italic">Dynamic alert</span>{" "}
          {text2} ...
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Click Me
      </Button>

      <Alert onClose={() => setAlertVisible(false)}>
        {text} <span className="fw-bolder fst-italic">This sort of works</span>{" "}
        {text}
      </Alert>
    </div>
  );
}

export default App;
