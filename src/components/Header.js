import React, { Component, Element } from 'react';

// TODO: replace with correct image
class Header extends Component {
    render(): Element {
        return (
                <div>
                    <div className="banner-container">
                        <img className="banner" src="/banner_transparent.png"/>
                    </div>
                </div>
        );
    }
}

export default Header;
