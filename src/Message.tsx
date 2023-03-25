// PascalCasing for function component
function Message() {
  const name = "Bernie";
  if (name) return <h1>Hello {name}, Welcome!!</h1>; // JSX
  return <h1>Hello World!!</h1>;
}

export default Message;
