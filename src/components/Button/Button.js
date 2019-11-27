import React from 'react'

const button = ( props ) => (
    <div>
        <a href={props.call}><button onClick={props.clicked}>{props.value}</button></a>
    </div>
);

export default button;