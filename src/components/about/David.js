import React, { Component, Element } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

class David extends Component {
    render(): Element {
        return (
                <div>
                    <Header/>
                    <div className="container">
                        <h1>David</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/david.jpg"/>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://www.youtube.com/channel/UCe9vi2gNZ8ci3_NrVWOnaTg"><img className="social-icon" src="/youtube_icon.png"/></a>
                            <a href="https://www.patreon.com/DavidBelcher"><img className="social-icon" src="/patreon_icon.png"/></a>
                        </div>
                        <div>
                            <p>
                                I'm David Belcher! In real life, I love my fiancee Andrea, drums, video games, and my friends and family. People give me money to do science! I play drums and sing in Kid Yuki! I'm our rapper - BANG! ^.^
                            </p>
                            <p>
                                I met Kid Yuki my sophomore year of college in Illini Contraband. He was and still is a warm and welcoming fellow musician. Ever since, we've helped each other grow through performing, co-writing, arranging, and just firing our music lasers in all directions at once. I love him!
                            </p>
                            <p>
                                Outside of Kid Yuki, I just do whatever the heck my friends are doing: Jamming, Board Games, Card Games, Smash, League of Legends. I'm also always down for a walk-n-talk!
                            </p>
                            <p>
                                My favorite Kid Yuki song is Sorairo Days.
                            </p>
                        </div>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

export default David;
