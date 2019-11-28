import React, { Component } from 'react';
import Extractor from './Extractor/Extractor';
import Transformator from './Transformator/Transformator';
import ETL from './ETL/ETL';
import Cleaner from './Cleaner/Cleaner';
import Loader from './Loader/Loader'
import Exporter from '../Exporter/Exporter';
import { Route, Link } from 'react-router-dom';



class MainScreen extends Component {
    render() {
        return (
           <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/extract">Extract</Link></li>
                            <li><Link to="/transform">Transform</Link></li>
                            <li><Link to="/load">Load</Link></li>
                            <li><Link to="/etl">ETL</Link></li>
                            <li><Link to="/export-csv">Export CSV</Link></li>
                            <li><Link to="/clean-db">Clean DB</Link></li>
                        </ul>
                    </nav>
                </header>

               <Route path="/extract" component={Extractor} />
               <Route path="/transform" component={Transformator} />
               <Route path="/load" component={Loader} />
               <Route path="/etl" component={ETL} />
               <Route path="/export-csv" component={Exporter} />
               <Route path="/clean-db" component={Cleaner} />
            </div>            
        );
    }
}

export default MainScreen;