import React, { Component } from 'react';
import Button from '../../components/Button/Button'
import Extractor from './Extractor/Extractor';
import Transformator from './Transformator/Transformator';
import ETL from './ETL/ETL';
import Cleaner from './Cleaner/Cleaner';
import Loader from './Loader/Loader'
import Exporter from '../Exporter/Exporter';
import { Route } from 'react-router-dom';



class MainScreen extends Component {
    render() {
        return (
           <div>
               <h1>ETL App</h1>
               <Button value="Extract" clicked="/extract"/>
               <Button value="Transform" clicked="/transform"/>
               <Button value="Load" clicked="/load"/>
               <Button value="ETL" clicked="/etl"/>
               <Button value="Export CSV" clicked="/export-csv"/>
               <Button value="Clean DB" clicked="/clean-db"/>
               
               <Route path="/extract" exact component={Extractor} />
               <Route path="/transform" exact component={Transformator} />
               <Route path="/load" exact component={Loader} />
               <Route path="/etl" exact component={ETL} />
               <Route path="/export-csv" exact component={Exporter} />
               <Route path="/clean-db" exact component={Cleaner} />


            </div>            
        );
    }
}

export default MainScreen;