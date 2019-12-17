import React, { Component } from 'react';
import axios from 'axios';
import ReactJson from 'react-json-view'
import './Transformator.css'
import { Form, Button, Spinner } from 'react-bootstrap';

import Book from '../../components/Book/Book'

class Transformator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isEnteredValue: false,
            isTransformated: false,
            numberToTransform : 1
        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.toggleTransformatedItems = this.toggleTransformatedItems.bind(this);
    }
    
    handleValueChange = (event) => {
        this.setState({numberToTransform: event.target.value});
    }

    toggleTransformatedItems = () => {  
        const doesEntered = this.state.isEnteredValue;
        this.setState( { isEnteredValue: !doesEntered} );
        const doesTransformated = this.state.isTransformated;
        let link = "http://localhost:8081/getTransformedItems/" + this.state.numberToTransform;
        axios.get( link )
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

            {this.state.isEnteredValue ? 
                <div className="Books">
                    {this.state.isTransformated ? books :
                        <div style={{textAlign: "center"}}>
                            <Spinner animation="border" role="status" />
                            <h4 style={{marginTop: '15px'}}>Transformating data...</h4>
                        </div>
                    }
            </div>: 
            <Form onSubmit={this.toggleTransformatedItems}>
                <Form.Group>
                    <Form.Label><h3>Items number</h3></Form.Label>
                    <Form.Control size="lg" type="number" min="1" max="120" placeholder="Enter the number of items" value={this.state.numberToTransform} onChange={this.handleValueChange}/>
                    <Form.Text className="text-muted">
                        Enter the number of items you wanna transform (1-120)
                    </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Transform items
                </Button>
            </Form>}
                 
            {/*<ReactJson src={this.state.books} theme="summerfruit" />*/}
        </div>
    );
   }
}

export default Transformator;