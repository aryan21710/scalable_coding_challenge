import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimeSeries } from '../../common/utils';
import cones from '../../../cones.json';
import { styles } from './styles';
import GridDisplay from './GridDisplay';

const Table = ({ riskLevel }) => {
	const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];
	const fee = 0.01;

	var timeSeries = calculateTimeSeries({
		mu: cone.mu,
		sigma: cone.sigma,
		years: 10,
		initialSum: 10000,
		monthlySum: 200,
		fee,
    });
    
	return (
		<div style={styles.gridContainer}>
			<GridDisplay timeSeries={timeSeries}/>
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
