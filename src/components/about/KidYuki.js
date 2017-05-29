import React, { Component, Element } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

class KidYuki extends Component {
    render(): Element {
        return (
                <div>
                    <Header/>
                    <div className="container">
                        <h1>Kid Yuki</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/kid_yuki.jpg"/>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://www.facebook.com/kidyuki1"><img className="social-icon" src="/facebook_icon.png"/></a>
                            <a href="https://www.youtube.com/user/kidyuki1"><img className="social-icon" src="/youtube_icon.png"/></a>
                            <a href="https://twitter.com/kidyuki1"><img className="social-icon" src="/twitter_icon.png"/></a>
                            <a href="https://www.instagram.com/kidyuki1/"><img className="social-icon" src="/instagram_icon.png"/></a>
                            <a href="https://soundcloud.com/kidyuki1"><img className="social-icon" src="/soundcloud_icon.png"/></a>
                            <a href="https://www.patreon.com/kidyuki1"><img className="social-icon" src="/patreon_icon.png"/></a>
                        </div>
                        <div>
                            <p>
                                I'm the vocalist and lead guitarist in Kid Yuki and The Otakus.
                                I've been playing music pretty much my whole life, from piano to trumpet to drums and finally guitar.
                            </p>
                            <p>
                                I'm the vocalist and lead guitarist in Kid Yuki and The Otakus.
                                I've been playing music pretty much my whole life, from piano to trumpet to drums and finally guitar. I've jammed with and played in several bands with Kyle (keys) since high school, and in college, I met Andrew (sound engineer) and David (drummer) through a student organization rock band we were all part of. It wasn't until 2013 that I started playing nerdy music.
                            </p>
                            <p>
                                Anime had always been a big part of my life growing up, but the possibility of combining my love for anime with my love for music didn't dawn on me until I saw an anime cover band at Anime Midwest in Chicago. Since then, I've been doing cover videos on Youtube and acoustic performances at various conventions across the country under the name Kid Yuki. Along the way, I met Amaya (singer), Oni (bass guitar), and Dej'a (singer). I was lucky enough that these two, along with David and Kyle, were interested in forming a full electric anime/video game cover band, and thus, Kid Yuki and The Otakus was born.
                            </p>
                            <p>
                                Outside of Kid Yuki and the Otakus: I'm an engineer by day, and I always end up doing various musical projects with David. My life when I'm not at work is basically divided between watching anime and playing music.
                            </p>
                            <p>
                                My favorite song to play in Kid Yuki and The Otakus is probably "This Will Be The Day," the RWBY Volume 1 opening, if for no other reason than for the 6-part "legends scatter" harmony. Plus, that opening riff is just so satisfying.
                            </p>
                        </div>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

export default KidYuki;
