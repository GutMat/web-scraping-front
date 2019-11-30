import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import './Extractor.css'
import { Card, Accordion, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
margin-top: 70px;
Button {
   color: #bbb;
   &:hover {
   color: white;
   }
}
`;

class Extractor extends Component {

    state = {
        nodes: []
    }
    componentDidMount() {
        axios.get( 'http://localhost:8081/getExtractedItems' )
            .then( response => {
                this.setState({nodes: response.data});
            });
    }

    

   render () {
       let str = this.state.nodes.join();
       let characters = str.replace(/\s+/g, '').length;
    return (

        <Styles>
            <Card>
                <Card.Header as="h2">Extractor</Card.Header>
            </Card>
            <Accordion>
                <Card className="bg-dark">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Display number of extracted nodes
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-secondary">Extracted {this.state.nodes.length} nodes</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Display number of extracted characters
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-secondary">Extracted {characters} characters</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Display formatted JSON version of nodes
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-secondary"><ReactJson src={this.state.nodes} theme="summerfruit" /></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </ Styles>
    );
   }
}

export default Extractor;