import React, { Component, Element } from 'react';

class HomepageHeader extends Component {
    render(): Element {
        return (
                <div className="homepage-banner-background">
                    <div className="homepage-banner-container">
                        <img className="homepage-banner" src="/homepage_banner.jpg"/>
                    </div>
                </div>
        );
    }
}

export default HomepageHeader;
