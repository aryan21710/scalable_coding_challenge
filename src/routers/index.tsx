import React from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { styles } from './styles.ts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Approutes = () => (
    <BrowserRouter>
        <div style={styles.mainContainer}>
            <Header/>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/table" component={() => <Table />} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default Approutes;





