import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu';
import RiskLevelSelector from '../components/RiskLevelSelector';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { styles } from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useFetchConesApi } from '../customHooks/useFetchConesApi';


 const Approutes = () => {
	 const [riskLevel,setRiskLevel]=useState(3);
	 const [cone,setCone]=useState([])
	 const onChangeRiskLevel=(newRiskLevel)=>setRiskLevel(newRiskLevel);
	useFetchConesApi(setCone)

	return (
			<BrowserRouter>
			<div style={styles.mainContainer}>
			<Header/>
					<Menu />
					<RiskLevelSelector onChangeRiskLevel={onChangeRiskLevel} />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/table" component={() => <Table riskLevel={riskLevel} cone={cone}/>} />
						<Route path="/chart" component={() => <Chart riskLevel={riskLevel} cone={cone}/>} />
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
	)
}

export default Approutes;





