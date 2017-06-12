import React, { Component, Element } from 'react';

class Deja extends Component {
    render(): Element {
        return (
                <div>
                    <div className="about-container">
                        <h1>Dej'a</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/deja.jpg"/>
                        </div>
                        <div className="social-icon-container">
                        </div>
                        <div>
                            <p>
                                Hi, hi! My name is Dej'a and I'm one of the vocalists for Kid Yuki and the Otakus. In real life, I'm a full time college student who majors in Biology with a concentration in genetics.
                            </p>
                            <p>
                                I actually met Kid Yuki through Andre who asked me if I'd like to be a feature on a RWBY song for Kid Yuki and the Otakus' show at Anime Midwest 2015. I was ecstatic and said yes, Andre showed Kid Yuki a video of me singing, and I've been in the band ever since.
                            </p>
                            <p>
                                Outside of Kid Yuki and the Otakus, I go to school, hit the gym, take care of my dogs, go to conventions, play video games, read comic books and manga, and counsel kids at a music camp.
                            </p>
                            <p>
                                My favorite songs to perform with Kid Yuki and the Otakus are Unravel and Red Like Roses Part II.
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Deja;
