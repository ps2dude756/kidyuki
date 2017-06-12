import React, { Component, Element } from 'react';

class Home extends Component {
    render(): Element {
        return (
                <div>
                    <div className="pinned-item">
                        <div>Next Kid Yuki show:</div>
                        <div><a href="#">Colossal Con, June 1 - 4 Sandusky, OH</a></div>
                    </div>
                    {/*<div className="pinned-item">
                        <div>Next Kid Yuki livestream:</div>
                        <div><a href="#">Tuesday, April 17 at 9pm CST</a></div>
                    </div>*/}
                    <div className="fb-page-container">
                        <div
                            className="fb-page"
                            data-adapt-container-width="true"
                            data-href="https://www.facebook.com/kidyuki1/"
                            data-hide-cover="true"
                            data-hide-cta="true"
                            data-show-facepile="false"
                            data-small-header="true"
                            data-tabs="timeline"
                        >
                            <blockquote 
                                cite="https://www.facebook.com/kidyuki1/" 
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/kidyuki1/">Kid Yuki and The Otakus Facebook page</a> failed to load. Refresh to try again.
                            </blockquote>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Home;
