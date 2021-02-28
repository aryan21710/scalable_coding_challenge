import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

class RiskLevelSelector extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let { onChangeRiskLevel } = this.props;
        var riskLevel = parseInt(event.target.value);
        onChangeRiskLevel(riskLevel);
    }

    render() {

        const {  maxRiskLevel } = this.props;
        var defultRiskl = 10;
        const options = [];
        for(let k = 1; k <= maxRiskLevel; ++k) {
            options.push(
                <option key={k} value={k}>{k}</option>
            );
        }

        return (
            <div style={styles.riskLevelContainer}>
                <label>
            Risk level:
                </label>
                <select onChange={this.onChange} defaultValue={defultRiskl}>
                    {options}
                </select>
            </div>
        );
    }
}



export default RiskLevelSelector;
