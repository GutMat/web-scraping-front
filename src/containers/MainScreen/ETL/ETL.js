import React, { Component } from 'react';
import Book from '../../../components/Book/Book'
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation'


class ETL extends Component {
   render (){
    return (
        <div>
            <p>ETL</p>
            <Book />
            <LoadingAnimation />
        </div>
    );
   }
}

export default ETL;