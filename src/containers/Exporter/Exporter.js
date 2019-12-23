import React, { Component } from 'react';

class Exporter extends Component {

   render (){
    return (
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <a href="http://localhost:8081/getBooksCSV" class="btn btn-dark btn-lg" role="button">Download CSV</a>
        </div>
    );
   }
}

export default Exporter;