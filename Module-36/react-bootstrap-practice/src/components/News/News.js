import React from "react";
import {Card, Button} from 'react-bootstrap';

const News = (props) => {
    const {title, urlToImage, description} = props.news;
  return (
    <div style = {{float: 'left', margin: '10px'}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
