import React, { Component } from 'react';
import Node from '../../../components/Node/Node'
import axios from 'axios'

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
            <Node />
            {this.state.nodes}
        </div>
    );
   }
}

export default Extractor;