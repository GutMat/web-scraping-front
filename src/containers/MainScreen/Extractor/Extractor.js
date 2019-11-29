import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';


class Extractor extends Component {

    state = {
        nodes: []
    }
    componentDidMount() {
        axios.get( 'http://localhost:8081/getExtractedItems' )
            .then( response => {
                this.setState({nodes: response.data});
            });
    }

   render () {

    return (
        <div>
            <p>Extractor</p>
            <ReactJson src={this.state.nodes} theme="summerfruit" />
        </div>
    );
   }
}

export default Extractor;