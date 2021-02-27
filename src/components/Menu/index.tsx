import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';

export default class Menu extends React.Component {

    render() {
        return (
            <div style={styles.menuContainer}>
                <div style={styles.innerContainer}>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/table">Table-View</Link></p>
                    <p><Link to="/chart">Chart-View</Link></p>
                </div>

            </div>
        );
    }

}
