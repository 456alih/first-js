import { Fragment } from "react";
function ListGroup() {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
