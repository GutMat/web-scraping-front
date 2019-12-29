import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../../components/Home/Home';
import Extractor from '../Extractor/Extractor';
import Transformator from '../Transformator/Transformator';
import ETL from '../ETL/ETL';
import Cleaner from '../Cleaner/Cleaner';
import Loader from '../Loader/Loader'
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Layout from '../../components/Layout/Layout';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/extract" component={Extractor} />
                  <Route path="/transform" component={Transformator} />
                  <Route path="/load" component={Loader} />
                  <Route path="/etl" component={ETL} />
                  <Route path="/clean-db" component={Cleaner} />
                  <Route component={ErrorPage} />
              </Switch>
            </Layout>
            <Footer />   
        </Router>
      </React.Fragment>  
    );
  }
}

export default App;
