function ListGroup() {
  let items = [
    "New York",
    "London",
    "Paris",
    "Munich",
    "Everybody talkin about Pop Muzik",
  ];

  items = ["New York", "London"];

  const numberOfItemsMessage =
    items.length < 5 ? <p>Only {items.length} items found</p> : null; //       {/* conditional constant using ternary operator, rendered in the return statement */}

  return (
    <>
      {/* use <> for the fragment tag in the return.This tells react to use a Fragmant to wrap all the children*/}
      <h1>List of Cities</h1>
      {numberOfItemsMessage}
      <ul className="list-group">
        {/* Only html elements can be returned. use curly braces to wrap js commands */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
