import React from 'react';

import './Book.css';

const book = (props) => (
    <div>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <h4>{props.price}</h4>
    </div>
);

export default book;

