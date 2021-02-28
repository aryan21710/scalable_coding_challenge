import React from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { MainContainer } from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Approutes = () => (
    <BrowserRouter>
        <MainContainer>
            <Header/>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/table" component={() => <Table />} />
                <Route path="/chart" component={() => <Chart />} />
            </Switch>
            <Footer/>
        </MainContainer>
    </BrowserRouter>
);

export default Approutes;





