import React, { Component } from 'react';
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation'


class Cleaner extends Component {
   render (){
    return (
        <div>
            <p>Cleaner</p>
            <LoadingAnimation />
        </div>
    );
   }
}

export default Cleaner;