import React, { Component }from 'react'
import Button from '../Button/Button'
import Auxiliary from '../../hoc/Auxiliary'

class Layout extends Component {

    state = {
        showExtractExtend: false
    }

    toggleExtractOptions = () => {
       
        const doesShow = this.state.showExtractExtend;
        this.setState( { showExtractExtend: !doesShow } );
        console.log(this.state.showExtractExtend)
    }

    render() {

        let conditionalExtractButtons = null;

        if ( this.state.showExtractExtend ) {
            conditionalExtractButtons = (
                <div>
                    <Button value="Default view" call="http://localhost:8081/getExtractedItems"/>
                    <Button value="Formatted view" call="http://localhost:8081/getExtractedItems"/>
                </div>
            );
        }

        return (
            <Auxiliary>
                <h1>ETL App</h1>
                <Button value="Extract" clicked={this.toggleExtractOptions} />
                {conditionalExtractButtons}
                <Button value="Transform" call="http://localhost:8081/getTransformedItems/15"/>
                <Button value="Load" call="http://localhost:8081/getLoadedItems"/>
                <Button value="ETL" call="http://localhost:8081/getExtractedTransformedAndLoadedItems/20"/>
                <Button value="Export CSV file" call="http://localhost:8081/getBooksCSV"/>
                <Button value="Clear DB" call="http://localhost:8081/deleteAllItems"/>
            </Auxiliary>     
        );
    }
}

export default Layout;