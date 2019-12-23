import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

class Cleaner extends Component {

    state = {
        isDeleted: false
    }

    componentDidMount() {
        const deleteLink = "http://localhost:8081/deleteAllItems";
        const doesDeleted = this.state.isDeleted;
        axios.get( deleteLink )
            .then(this.setState({isDeleted: !doesDeleted}));
    }

   render (){
    return (
        <div>
            {this.state.isDeleted ?
                <div>
                    <h4>The data has been successfully deleted from database</h4>
                </div>
                :                         
                <div style={{textAlign: "center"}}>
                    <Spinner animation="border" role="status" />
                        <h4 style={{marginTop: '15px'}}>Deleting data...</h4>
                </div>
            }
    </div>
    );
   }
}

export default Cleaner;