import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

class Loader extends Component {
    
    state = {
        isLoaded: false,
        books: []
    }

    componentDidMount() {
        const loadLink = "http://localhost:8081/getLoadedItems";
        const doesLoaded = this.state.isLoaded;
        axios.get( loadLink )
            .then( response => {
                this.setState({books: response.data,
                    isLoaded: !doesLoaded})
            });
    }

   render (){
    return (
        <div style={{marginTop: '30px', textAlign: 'center'}}>
            {this.state.isLoaded ?
            <div>
                <h3>The transformated data has been successfully loaded to database</h3>
                <h4>Added {this.state.books.length} books to database</h4>
            </div>
            :                         
            <div style={{textAlign: "center"}}>
                <Spinner animation="border" role="status" />
                    <h4 style={{marginTop: '15px'}}>Loading data...</h4>
            </div>
            }
        </div>
    );
   }
}

export default Loader;