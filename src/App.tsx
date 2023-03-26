import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Munich", "Pop Muzik"];

  let heading = "Everybody talkin about";
  const text = "Warning!! Warning!!";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <Alert>
        {text} <span className="fw-bolder fst-italic">This sort of works</span>{" "}
        {text}
      </Alert>
    </div>
  ); // using self-closing syntax
}

export default App;
