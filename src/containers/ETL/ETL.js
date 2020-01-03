import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactJson from 'react-json-view';
import { Form, Button, Spinner} from 'react-bootstrap';
import './ETL.css';

import Book from '../../components/Book/Book'

class ETL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isEnteredValue: false,
            isETLed: false,
            isExtended: false,
            isIndividual: false,
            numberToETL : 1,
            ISBN: null,
            groupLength: 1
    }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.toggleETLedItems = this.toggleETLedItems.bind(this);

    }

    handleValueChange = (event) => {
        this.setState({numberToETL: event.target.value});
    }

    toggleETLedItems = () => {  
        const doesEntered = this.state.isEnteredValue;
        this.setState( { isEnteredValue: !doesEntered} );
        const doesETLed = this.state.isETLed;
        let ETLLink = "http://localhost:8081/getExtractedTransformedAndLoadedItems/" + this.state.numberToETL;
        axios.get( ETLLink )
            .then( response => {
                this.setState({books: response.data, 
                    isETLed: !doesETLed});
            });
    }

    toggleExtendedTransformation = () => {
        const doesExtended = this.state.isExtended;
        this.setState( { isExtended: !doesExtended} );
    }

    toggleSingleBook = (bookIndex) => {
        const doesIndividual = this.state.isIndividual;
        let bookISBN = this.state.ISBN;
        bookISBN = bookIndex;
        this.setState( { isIndividual: !doesIndividual,
                        ISBN: bookISBN} );
    }

    toggleAllBooks = () => {
        const doesIndividual = this.state.isIndividual;
        this.setState( { isIndividual: !doesIndividual} );
    }

   render (){

    let books = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    books = this.state.books.map(book => {
        return <Book key={book.book.isbn} 
                    title={book.book.title} 
                    publisher={book.book.publisher}
                    author={book.book.author}
                    price={book.bookPrice}
                    JSON={"http://localhost:8081/getSingleBookJSON/" + book.book.isbn}
                    CSV={"http://localhost:8081/getSingleBookCSV/" + book.book.isbn}
                    displaySingle={() => this.toggleSingleBook(book.book.isbn)} />;
    });

    let book = this.state.books.filter(b => b.book.isbn === this.state.ISBN)

    let bookJSON = <ReactJson src={book} 
                            theme="isotope" 
                            style={{width: '950px'}}/>;


    return (
        <div className="container View">
            {this.state.isEnteredValue ? 
                <div>
                    {this.state.isETLed ? 
                        <div>
                            {this.state.isExtended ?
                                    <div>
                                        {this.state.isIndividual ?
                                                <div>
                                                    {bookJSON}
                                                    <Button className="btn btn-dark btn-lg" 
                                                            onClick={this.toggleAllBooks} 
                                                            style={{margin: '30px 0px'}}>
                                                        Back
                                                    </Button>
                                                </div>
                                            :
                                                <div>
                                                    <div className="Books">
                                                        {books}
                                                    </div>
                                                    <div  style={{textAlign: 'center'}}>
                                                        <a href="http://localhost:8081/getBooksCSV" 
                                                            class="btn btn-dark btn-lg" 
                                                            role="button" 
                                                            style={{margin: '30px 15px'}}>
                                                            Download CSV
                                                        </a>
                                                        <Button className="btn btn-dark btn-lg" 
                                                                onClick={this.toggleExtendedTransformation} 
                                                                style={{margin: '30px 15px'}}>
                                                                Back
                                                        </Button>
                                                    </div>    
                                                </div>
                                        }

                                    </div>
                                :
                                    <div>
                                        <ReactJson src={this.state.books} 
                                                theme="isotope" 
                                                groupArraysAfterLength={this.state.groupLength} 
                                                style={{width: '950px'}}/>
                                        <div style={{textAlign: 'center', marginTop: '30px'}}>
                                            <Button className="btn btn-dark btn-lg" 
                                                    onClick={this.toggleExtendedTransformation} 
                                                    style={{margin: '15px 10px'}}>
                                                    See more
                                            </Button>
                                            <a href="http://localhost:8081/getBooksCSV" 
                                                class="btn btn-dark btn-lg" role="button" 
                                                style={{margin: '15px 10px'}}>
                                                Download CSV
                                            </a>
                                            <Link 
                                                to="/clean-db"
                                                className="btn btn-dark btn-lg"
                                                role="button"
                                                style={{margin: '15px 10px'}}>
                                                Clean database
                                            </Link>
                                        </div>
                                    </div>    
                            }
                            
                        </div>
                        :
                        <div style={{textAlign: "center"}}>
                            <Spinner animation="border" 
                                    role="status" />
                            <h4 style={{marginTop: '15px'}}>Preparing data...</h4>
                        </div>
                    }
                </div>
            : 
                <Form onSubmit={this.toggleETLedItems}>
                    <Form.Group>
                        <Form.Label>
                            <h3>Items number</h3>
                        </Form.Label>
                        <Form.Control size="lg" 
                                    type="number" 
                                    min="1" 
                                    max="120" 
                                    placeholder="Enter the number of items" 
                                    value={this.state.numberToETL} 
                                    onChange={this.handleValueChange}/>
                        <Form.Text className="text-muted">
                            Enter the number of items you wanna ETL (1-120)
                        </Form.Text>
                    </Form.Group>
                    <Button variant="dark" 
                            type="submit">
                            ETL items
                    </Button>
                </Form>
            }
        </div>
    );
   }
}

export default ETL;