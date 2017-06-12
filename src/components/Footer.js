import React, { Component, Element } from 'react';

class Footer extends Component {
    render(): Element {
        return (
                <div>
                    <div className="footer-container">
                        <div className="footer">
                            <div>Kid Yuki &copy; 2017</div>
                            <div className="attribution"><a href="https://github.com/ps2dude756">Site created by Andrew Roth</a></div>
                            <div className="attribution"><a href="https://www.instagram.com/robo.maru/">Site assets created by Maru</a></div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;
