import { useState } from "react";

interface Props {
  // typescript feature defining types of an object
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // destructure to allow access to these props throughout the function

  // hook - allows us to access built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1); // useState returns an array. deconstruct as shown

  const numberOfItemsMessage =
    items.length < 5 ? <p>Only {items.length} items found</p> : null; //       {/* conditional constant using ternary operator, rendered in the return statement */}

  return (
    <>
      {/* use <> for the fragment tag in the return.This tells react to use a Fragmant to wrap all the children*/}
      <h1>{heading}</h1>
      {numberOfItemsMessage}
      <ul className="list-group">
        {/* Only html elements can be returned. use curly braces to wrap js commands */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); //change state of selected index
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
