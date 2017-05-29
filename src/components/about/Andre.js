import React, { Component, Element } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

class Andre extends Component {
    render(): Element {
        return (
                <div>
                    <Header/>
                    <div className="container">
                        <h1>Andre</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/andre.jpg"/>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://www.facebook.com/oni.makihara"><img className="social-icon" src="/facebook_icon.png"/></a>
                            <a href="https://twitter.com/oni_duval"><img className="social-icon" src="/twitter_icon.png"/></a>
                            <a href="https://www.instagram.com/oni_duval/"><img className="social-icon" src="/instagram_icon.png"/></a>
                            <a href="http://oniduval.tumblr.com/"><img className="social-icon" src="/tumblr_icon.png"/></a>
                        </div>
                        <div>
                            <p>
                                Yo, name's Andre Duval, more commonly known as Oni, for my tall dark handsomeness, wild personality and personal brand of lucky black magic (also I kill wicked demons for a living while defending the innocence of all lifeforms). In real life I'm a freelance musician who plays bass guitar, upright bass, and saxophone for multiple projects. I'm solo artist with my own band and I'm a creative writer. I'm Kid Yuki's bass player, body guard, and shinigami enforcer.
                            </p>
                            <p>
                                How I met Kid Yuki: I posted a video of myself playing "City Escape" from Sonic Adventure 2 into an Acen group, he saw it and after some talking and grooving and nerding out over Facebook chat, he invited me to play bass for him at Anime Midwest 2015. The rest is love and history and I couldn't be happy to be a part of this band's journey.
                            </p>
                            <p>
                                Outside of Kid Yuki, I play in various bands, I write poetry and various stories, am currently making a foray into music production composition and scoring. I play video games, read comic books, do martial arts, go to the gym and cook.
                            </p>
                            <p>
                                My favorite Kid Yuki songs to play are definitely Sorairo Days (Gurren Lagann), Simple and Clean (Kingdom Hearts), Crossing Field (Sword Art Onlne) and City Escape (I like the slap bass).
                            </p>
                            <p>
                                Thanks for lookin' me up. Lookin forward to jammin' with ya!
                            </p>
                        </div>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

export default Andre;
