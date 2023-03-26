import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Munich", "Pop Muzik"];

  let heading = "Everybody talkin about";

  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  ); // using self-closing syntax
}

export default App;
