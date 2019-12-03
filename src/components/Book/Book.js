import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

import './Book.css';

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
                    <Card.Link href="#">See more info</Card.Link>
                    <Card.Link href="#">Export CSV</Card.Link>
                    <Card.Link href="#">Export TXT</Card.Link>
                </div>
            </Card.Body>
        </Card>
    </Styles>
);

export default book;

