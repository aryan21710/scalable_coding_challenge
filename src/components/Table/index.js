import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { calculateTimeSeries } from '../../common/utils';
import { styles } from './styles';
import GridDisplay from './GridDisplay';
import RiskLevelSelector from '../RiskLevelSelector';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';

const Table = () => {
	const [cone, setCone] = useState({});
	const [riskLevel, setRiskLevel] = useState(3);
	const onChangeRiskLevel = newRiskLevel => setRiskLevel(newRiskLevel);

	useFetchConesApi(setCone, riskLevel);

	var timeSeries = calculateTimeSeries({
		mu: cone.mu,
		sigma: cone.sigma,
		years: 10,
		initialSum: 10000,
		monthlySum: 200,
		fee: 0.01,
	});

	return (
		<div style={styles.tableContainer}>
			<RiskLevelSelector onChangeRiskLevel={onChangeRiskLevel} />
			<div style={styles.gridContainer}>
				<GridDisplay timeSeries={timeSeries} />
			</div>
		</div>
	);
};

Table.defaultProps = {
	riskLevel: 3,
};

Table.propTypes = {
	riskLevel: PropTypes.number,
};

export default Table;
