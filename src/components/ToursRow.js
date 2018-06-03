import React, { Component, Element } from 'react';

const MONTHS = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
];

class ToursRow extends Component {
    render(): Element {
        let dateString = '';
        if (this.props.tour.start_timestamp === this.props.tour.end_timestamp) {
            const date = new Date(this.props.tour.start_timestamp * 1000);
            dateString = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        } else {
            const startDate = new Date(this.props.tour.start_timestamp * 1000);
            const endDate = new Date(this.props.tour.end_timestamp * 1000);
            dateString = `${MONTHS[startDate.getMonth()]} ${startDate.getDate()}-${endDate.getDate()}, ${startDate.getFullYear()}`;
        }

        return (
            <tr className="tours-row">
                <td className="tours-cell">{dateString}</td>
                <td className="tours-cell">{this.props.tour.convention}</td>
            </tr>
        );
    }
}

export default ToursRow;
