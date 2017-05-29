import React, { Component, Element } from 'react';
import NavMenu from './NavMenu.js';

// TODO: replace with correct image
class Header extends Component {
    render(): Element {
        return (
                <div>
                    <NavMenu/>
                    <div className="banner-container">
                        {/*<img className="banner" src="/banner_transparent.png"/>*/}
                    </div>
                </div>
        );
    }
}

export default Header;
