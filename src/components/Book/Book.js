import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  a {
    color: gray;
    font-weight: bold;
    &:hover {
      color: black;
      font-weight: bold;
    }
  }
`;

const book = (props) => (
    <Styles>
        <Card style={{ width: '22rem', height: '18rem', margin: '10px', position: 'relative'}}>
            <Card.Body>
                <Card.Title className="font-weight-bold">{props.title}</Card.Title>
                <Card.Title>{props.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.publisher}</Card.Subtitle>
                <Card.Text>{props.price} PLN</Card.Text>
                <div style={{ position: 'absolute', bottom: '15px'}}>
                    <Card.Link href={props.JSON}>Export JSON</Card.Link>
                    <Card.Link href={props.CSV}>Export CSV</Card.Link>
                    <Button variant="dark" onClick={props.displaySingle} style={{marginLeft: '20px', marginBottom: '5px'}}>See more</Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
);

export default book;

