import React from 'react'
import Button from '../Button/Button'

const layout = ( props ) => (
    <div>
        <h1>ETL App</h1>
        <Button value="Extract" call="http://localhost:8081/getExtractedItems"/>
        <Button value="Transform" call="http://localhost:8081/getTransformedItems/15"/>
        <Button value="Load" call="http://localhost:8081/getLoadedItems"/>
        <Button value="ETL" call="http://localhost:8081/getExtractedTransformedAndLoadedItems/15"/>
        <Button value="Export CSV file" call="http://localhost:8081/getBooksCSV"/>
        <Button value="Clear DB" call="http://localhost:8081/deleteAllItems"/>
    </div>
);

export default layout;