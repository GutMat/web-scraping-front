import React from 'react'

const button = ( props ) => (
    <div>
        <a href={props.clicked}><button>{props.value}</button></a>
    </div>
);

export default button;