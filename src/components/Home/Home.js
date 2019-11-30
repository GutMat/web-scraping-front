import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  } from 'react-bootstrap';

import './Home.css';

const Styles = styled.div`
width: 30%;
  a {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const home = (props) => (
    <Styles className="btn-group-vertical">
        <h1>ETL App</h1>
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
            
            <Link to="/clean-csv" 
                        className="btn btn-dark btn-lg"
                        role="button">Clean database</Link>    
    </Styles>
);

export default home;
