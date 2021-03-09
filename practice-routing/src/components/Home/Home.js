import React from "react";
import { useEffect, useState } from "react";
import PersonInfo from "../PersonInfo/PersonInfo";

const Home = () => {
  const [persons, setPersons] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  return (
    <div>
      <h1>Total Person: {persons.length}</h1>
      {
        persons.map((person) => <PersonInfo person={person} key = {person.id}></PersonInfo>)
      }
    </div>
  );
};

export default Home;
