import React, { Component, Element } from 'react';
import ToursRow from './ToursRow.js';

class ToursTable extends Component {
    render(): Element {
        return (
            <table className="tours-table">
                <thead>
                    <tr className="tours-row">
                        <th className="tours-cell">Date</th>
                        <th className="tours-cell">Convention</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shows.map((ele, index) => <ToursRow key={index} tour={ele}/>)}
                </tbody>
            </table>
                    
        );
    }
}

export default ToursTable;
