import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    let { id } = useParams();

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [person, setPerson] = useState({});

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setPerson(data))
    }, );

    const {name, email, phone, website} = person;

    return (
        <div>
            <p>This is friend detail component: {id}</p>
            <h2>{name}</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Address:</strong> {person.address?.street}, {person.address?.suite}, {person.address?.city}-{person.address?.zipcode}</p>
            <p><strong>Website:</strong> {website}</p>
        </div>
    );
};

export default FriendDetail;