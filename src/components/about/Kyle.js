import React, { Component, Element } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

class Kyle extends Component {
    render(): Element {
        return (
                <div>
                    <Header/>
                    <div className="container">
                        <h1>Kyle</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/kyle.jpg"/>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://www.facebook.com/kylemagnussonmusic"><img className="social-icon" src="/facebook_icon.png"/></a>
                            <a href="https://www.youtube.com/channel/UCNIHnxmElGGr0h4J4iH3Pcg"><img className="social-icon" src="/youtube_icon.png"/></a>
                            <a href="https://soundcloud.com/kylemagnusson"><img className="social-icon" src="/soundcloud_icon.png"/></a>
                        </div>
                        <div>
                            <p>
                                Hey there! I'm Kyle, and I play keys, occasional guitar, and do backup vocals in Kid Yuki and the Otakus.
                            </p>
                            <p>
                                Back in 2005, I went with my family to a neighbor's Christmas party. My parents were friends with a couple whose son, like myself, was a freshman in High School and loved playing music. I saw this kid playing guitar in the living room, and I approached him immediately. We talked music, played some guitar, and he taught me how to play "Wish You Were Here" by Pink Floyd. The house had a piano, and I started playing the Maple Leaf Rag. My new friend liked what I did, so he invited me to come over and jam.
                            </p>
                            <p>
                                That friend was Kid Yuki, and many jams were had.
                            </p>
                            <p>
                                Throughout the years, we became great friends and played together and separately in many different bands. Around February 2012, I went to visit him at college. He invited me to jam in the basement of his friend's house. Kid Yuki's friend was a sick drummer, and I had a lot in common with this guy. We shared a passion for music, loved N64 games, and listened to a lot of similar bands. This friend was David, drummer for Kid Yuki and the Otakus. We have been playing music and palling around ever since.
                            </p>
                            <p>
                                I met the rest of the Otakus in December 2014, with the exception of De'ja, whom I met at Acen 2015. As a band, we have formed meaningful and lasting relationships with each other and formed a family of sorts. Our individual talents and passions have brought us together as a very tight-knit group of people.
                            </p>
                            <p>
                                Outside of being an Otaku, I play in bands around the Chicago area both as a keyboardist and guitarist. I also work a day gig as a web developer. I love traveling, attending concerts and music festivals, trying new/interesting places to eat, spending time with my family, snowboarding, the outdoors, and of course, learning to get better as a musician.
                            </p>
                            <p>
                                My favorite song to play with the band is Crossing Field.
                            </p>
                            <p>
                                *woogity woogity woogity*
                            </p>
                        </div>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

export default Kyle;
