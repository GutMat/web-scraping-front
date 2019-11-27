import React, { Component }from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import Button from '../../components/Button/Button'

class Layout extends Component {

    state = {
        isExtracted: false,
        isTransformated: false,
        isLoadedToDB: false,
        showExtractorExtend: false,
        showTransformatorExtend: false,
        numberOfItems : 0
    }

    toggleExtractorOptions = () => {  
        const doesShow = this.state.showExtractorExtend;
        this.setState( { showExtractorExtend: !doesShow } );
    }

    togglePromptBox = () => {
        const doesExtracted = this.state.isExtracted;
        console.log(doesExtracted);
        //if(doesExtracted) {
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
            this.setState( {
                showTransformatorExtend: !doesShow,
                numberOfItems: value 
            } );
       /* } else {
            alert("Please extract items")
            return;
        }*/

    }

    changeStatusOfExtractor = () => {
        const doesExtracted = this.state.isExtracted;
        this.setState( { isExtracted: !doesExtracted } );
    }

    changeStatusOfTransformator = () => {
        const doesTransformated = this.state.isTransformated;
        this.setState( { isTransformated: !doesTransformated } );
    }

    changeStatusOfLoader = () => {
        const doesLoadedToDB = this.state.isLoadedToDB;
        this.setState( { isLoadedToDB: !doesLoadedToDB } );
    }

    render() {

        let conditionalExtractorButtons = null;
        let conditionalTransformatorButtons = null;

        if ( this.state.showExtractorExtend ) {
            conditionalExtractorButtons = (
                <div>
                    <Button 
                        value="Default view"
                        call="http://localhost:8081/getExtractedItems"
                        clicked={this.changeStatusOfExtractor}/>
                    <Button 
                        value="Formatted view" 
                        call="http://localhost:8081/getExtractedItems" 
                        clicked={this.changeStatusOfExtractor}/>
                </div>
            );
        }

        if ( this.state.showTransformatorExtend ) {
            let link = "http://localhost:8081/getTransformedItems/" + this.state.numberOfItems
            conditionalTransformatorButtons = (
                <div>
                    <Button 
                        value="Default view"
                        call={link}
                        clicked={this.changeStatusOfTransformator}/>
                    <Button 
                        value="Formatted view"
                        call={link}
                        clicked={this.changeStatusOfTransformator}/>
                </div>
            );
        }

        return (
            <Auxiliary>
                <h1>ETL App</h1>
                <Button 
                    value="Extract"
                    clicked={this.toggleExtractorOptions} />
                {conditionalExtractorButtons}
                <Button 
                    value="Transform" 
                    clicked={this.togglePromptBox}/>
                {conditionalTransformatorButtons}
                <Button 
                    value="Load" 
                    call="http://localhost:8081/getLoadedItems"
                    clicked={this.changeStatusOfLoader}/>
                <Button 
                    value="ETL" 
                    call="http://localhost:8081/getExtractedTransformedAndLoadedItems/20"/>
                <Button 
                    value="Export CSV file" 
                    call="http://localhost:8081/getBooksCSV"/>
                <Button 
                    value="Clear DB" 
                    call="http://localhost:8081/deleteAllItems"/>
            </Auxiliary>     
        );
    }
}

export default Layout;