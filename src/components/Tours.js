import React, { Component, Element } from 'react';
import ToursTable from './ToursTable.js';

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acoustic_shows: [],
            electric_shows: []
        };
    }

    componentDidMount() {
        fetch('/api/get_shows').then((res) => res.json()).then((res) => {
            this.setState(res);
        });
    }

    render(): Element {
        return (
                <div>
                    <h1 className="page-header">Tours</h1>

                    <h2 className="page-header">Electric Shows</h2>
                    <ToursTable shows={this.state.electric_shows}/>

                    <h2 className="page-header">Acoustic Shows</h2>
                    <ToursTable shows={this.state.acoustic_shows}/>
                </div>
        );
    }
}

export default Tours;
