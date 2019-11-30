import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './Home.css';

const home = (props) => (
    <div className="btn-group-vertical">
        <h1>ETL App</h1>
            <Link to="/extract">
                <Button variant="dark">Extract</Button>
            </Link>
            <Link to="/transform">
                <Button variant="dark">Transform</Button>
            </Link>
            <Link to="/load">
                <Button variant="dark">Load to database</Button>
            </Link>
            <Link to="/etl">
                <Button variant="dark">ETL</Button>
            </Link>
            <Link to="/export-csv">
                <Button variant="dark">Export to CSV</Button>
            </Link>
            <Link to="/clean-db">
                <Button variant="dark">Clean database</Button>
            </Link>
    </div>
);

export default home;
