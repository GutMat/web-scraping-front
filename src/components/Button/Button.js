import React from 'react'

const button = ( props ) => (
    <div>
        <a href={props.call}><button>{props.value}</button></a>
    </div>
);

export default button;