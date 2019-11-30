import React, { Component } from 'react';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'

class Loader extends Component {
   render (){
    return (
        <div>
            <p>Loader</p>
            <LoadingAnimation />
        </div>
    );
   }
}

export default Loader;