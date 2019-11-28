import React, { Component } from 'react';
import axios from 'axios';

import Book from '../../../components/Book/Book'

class Transformator extends Component {

    state = {
        books: []
    }
    componentDidMount() {
        axios.get( 'http://localhost:8081/getTransformedItems/5' )
            .then( response => {
                this.setState({books: response.data});
            });
    }

   render (){

    let books = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        books = this.state.books.map(book => {
            return <Book 
                key={book.book.isbn} 
                title={book.book.title} 
                author={book.book.author} />;
        });


    return (
        <div>
            <p>Transformator</p>
            {books}
        </div>
    );
   }
}

export default Transformator;