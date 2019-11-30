import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import './Home.css';

const Styles = styled.div`
  a {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const home = (props) => (
    <Styles>
      <div  className="btn-group-vertical Buttons">
        <Card>
          <Card.Header as="h2">ETL App</Card.Header>
        </Card>
            <Link to="/extract" 
                        className="btn btn-dark btn-lg"
                        role="button">Extract</Link>
        
            <Link to="/transform" 
                        className="btn btn-dark btn-lg"
                        role="button">Transform</Link>
            
            <Link to="/load" 
                        className="btn btn-dark btn-lg"
                        role="button">Load to database</Link>
            
            <Link to="/etl" 
                        className="btn btn-dark btn-lg"
                        role="button">ETL</Link>
            
            <Link to="/export-csv" 
                        className="btn btn-dark btn-lg"
                        role="button">Export to CSV</Link>
            
            <Link to="/clean-db" 
                        className="btn btn-dark btn-lg"
                        role="button">Clean database</Link>
      </div>
    </Styles>
);

export default home;
