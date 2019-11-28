import React, { Component } from 'react';
import Node from '../../../components/Node/Node'
import Book from '../../../components/Book/Book'
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation'


class ETL extends Component {
   render (){
    return (
        <div>
            <p>ETL</p>
            <Node />
            <Book />
            <LoadingAnimation />
        </div>
    );
   }
}

export default ETL;