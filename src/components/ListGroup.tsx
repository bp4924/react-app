import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "New York",
    "London",
    "Paris",
    "Munich",
    "Everybody talkin about Pop Muzik",
  ];

  //items = ["New York", "London"]; //testing the less than 5 case for conditional components

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

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
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
