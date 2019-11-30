import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';

const book = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default book;
