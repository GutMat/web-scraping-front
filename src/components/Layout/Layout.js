import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';

const layout = (props) => (
    <Container className="Layout">
        {props.children}
    </Container>
);

export default layout;
