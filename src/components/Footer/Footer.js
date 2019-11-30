import React from 'react';

import './Footer.css';

const footer = (props) => (
    <div className="Footer">
        <p>&copy; {new Date().getFullYear()} Copyright: ETL Project</p>
    </div>
);

export default footer;

