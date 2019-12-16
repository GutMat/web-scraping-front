import React, { Component } from 'react';
import axios from 'axios';
import ReactJson from 'react-json-view'
import './Transformator.css'
import { Spinner } from 'react-bootstrap';

import Book from '../../components/Book/Book'

class Transformator extends Component {

    state = {
        books: [],
        isTransformated: false
    }
    componentDidMount() {
        const doesTransformated = this.state.isTransformated;
        axios.get( 'http://localhost:8081/getTransformedItems/5' )
            .then( response => {
                this.setState({books: response.data,
                            isTransformated: !doesTransformated});
            });
    }

   render (){

    let books = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        books = this.state.books.map(book => {
            return <Book 
                key={book.book.isbn} 
                title={book.book.title} 
                publisher={book.book.publisher}
                author={book.book.author}
                price={book.bookPrice}
                JSON={"http://localhost:8081/getSingleBookJSON/" + book.book.isbn}
                CSV={"http://localhost:8081/getSingleBookCSV/" + book.book.isbn} />;
        });


    return (
        <div className="container View">
                <div className="Books">
                        {this.state.isTransformated ? books :
                        <div style={{textAlign: "center"}}>
                            <Spinner animation="border" role="status" />
                            <h4 style={{marginTop: '15px'}}>Transformating data...</h4>
                        </div>
                        }
                </div>     
            {/*<ReactJson src={this.state.books} theme="summerfruit" />*/}
        </div>
    );
   }
}

export default Transformator;