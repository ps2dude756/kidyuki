import React, { Component, Element } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

class Tours extends Component {
    render(): Element {
        return (
                <div>
                    <Header/>
                    <h1 className="page-header">Tours</h1>
                    <table className="tours-table">
                        <thead>
                            <tr className="tours-row">
                                <th className="tours-cell">Date</th>
                                <th className="tours-cell">Convention</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tours-row">
                                <td className="tours-cell">Sept. 15-17, 2017</td>
                                <td className="tours-cell">Ramencon</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">July 7-9, 2017</td>
                                <td className="tours-cell">Anime Midwest</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">June 1-4, 2017</td>
                                <td className="tours-cell">Colossal Con</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">Feb. 4, 2017</td>
                                <td className="tours-cell">UChi-Con</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">Jan. 6-8, 2017</td>
                                <td className="tours-cell">Anime-Zap!</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">Dec. 16-18, 2016</td>
                                <td className="tours-cell">Con Alt Delete</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">July 8-10, 2016</td>
                                <td className="tours-cell">Anime Midwest</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">June 17-18, 2016</td>
                                <td className="tours-cell">SoyCon</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">Jan. 30, 2016</td>
                                <td className="tours-cell">UChi-Con</td>
                            </tr>
                            <tr className="tours-row">
                                <td className="tours-cell">July 3-5, 2015</td>
                                <td className="tours-cell">Anime Midwest</td>
                            </tr>
                        </tbody>
                    </table>
                    <Footer/>
                </div>
        );
    }
}

export default Tours;
