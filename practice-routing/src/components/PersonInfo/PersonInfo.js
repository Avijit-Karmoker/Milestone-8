import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./PersonInfo.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PersonInfo = (props) => {
  const { name, email, id } = props.person;
  let history = useHistory();

  function handleClick() {
    let url = `/about/${id}`;
    history.push(url);
  }

  return (
    <div className="personDiv">
      <h1>Person Name: {name}</h1>
      <p>Email: {email}</p>
      <p>
        <Link to={`/about/${id}`}>
          <Button variant="success">Show more details {id}</Button>
        </Link>
        <Button onClick={() => handleClick(id)}>Click Here</Button>
      </p>
    </div>
  );
};

export default PersonInfo;
