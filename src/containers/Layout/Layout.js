import React, { Component }from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import Button from '../../components/Button/Button'

class Layout extends Component {

    state = {
        showExtractorExtend: false,
        showTransformatorExtend: false,
        numberOfItems : 0
    }

    toggleExtractorOptions = () => {  
        const doesShow = this.state.showExtractorExtend;
        this.setState( { showExtractorExtend: !doesShow } );
    }

    togglePromptBox = () => {  
        let promptBox = prompt("Please enter number of Items to transformation", "From 1-120");
        let value;
        let isNumeric = false;
        while(!isNumeric) {
            if(isNaN(promptBox) || promptBox === null || promptBox === "") {
                alert("Please enter correctly value!")
                promptBox = prompt("Please enter number of Items to transformation", "From 1-120");
            } else {
                isNumeric = true;
                value = parseInt(promptBox);
            }
        } 
        const doesShow = this.state.showTransformatorExtend;
        this.setState( { showTransformatorExtend: !doesShow } );
        this.setState( { numberOfItems: value } );
    }

    render() {

        let conditionalExtractorButtons = null;
        let conditionalTransformatorButtons = null;

        if ( this.state.showExtractorExtend ) {
            conditionalExtractorButtons = (
                <div>
                    <Button value="Default view" call="http://localhost:8081/getExtractedItems"/>
                    <Button value="Formatted view" call="http://localhost:8081/getExtractedItems"/>
                </div>
            );
        }

        if ( this.state.showTransformatorExtend ) {
            let link = "http://localhost:8081/getTransformedItems/" + this.state.numberOfItems
            conditionalTransformatorButtons = (
                <div>
                    <Button value="Default view" call={link}/>
                    <Button value="Formatted view" call={link}/>
                </div>
            );
        }

        return (
            <Auxiliary>
                <h1>ETL App</h1>
                <Button value="Extract" clicked={this.toggleExtractOptions} />
                {conditionalExtractorButtons}
                <Button value="Transform" clicked={this.togglePromptBox}/>
                {conditionalTransformatorButtons}
                <Button value="Load" call="http://localhost:8081/getLoadedItems"/>
                <Button value="ETL" call="http://localhost:8081/getExtractedTransformedAndLoadedItems/20"/>
                <Button value="Export CSV file" call="http://localhost:8081/getBooksCSV"/>
                <Button value="Clear DB" call="http://localhost:8081/deleteAllItems"/>
            </Auxiliary>     
        );
    }
}

export default Layout;