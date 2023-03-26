import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Munich", "Pop Muzik"];

  let heading = "Everybody talkin about";

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
    </div>
  ); // using self-closing syntax
}

export default App;
