import React, { Component, Element } from 'react';

class Amaya extends Component {
    render(): Element {
        return (
                <div>
                    <div className="about-container">
                        <h1>Amaya</h1>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src="/amaya.jpg"/>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://soundcloud.com/amaya-sings"><img className="social-icon" src="/soundcloud_icon.png"/></a>
                        </div>
                        <div>
                            <p>
                                Hi, there! I’m Amaya! I grew up playing the flute, loving Sailor Moon, playing video games, and singing in the shower. Turns out that I still sing but now lead on many songs in the band. As musical as I am, I am also a cosplayer, which, you could say, helped give me the chance to be part of the band since I end up at many Midwest cons.
                            </p>
                            <p>
                                So how did I become a part of the band? I went to a day of Anime Midwest in 2014 for the first time, where I spotted this guy playing his guitar and singing anime tunes for some people in the hall. So I thought, “Hey, I wonder if that guy would want to do a collab with me! I’ve always wanted to collab with someone! Maybe I should ask? Hmmm…this is weird, but…LET’S JUST DO IT!” I was going to try to sing along to something he played, but before I knew it, Kid Yuki was going to leave the area. It was time for a last-ditch effort—I asked if he’d want to collab, sang a bit for him, and from there we traded info to get to work on our first project (a medley from the game, Bastion.) Eventually, I became part of the band and contribute as part of an acoustic duo with Kid Yuki when we do musical panels/mini shows at Midwestern cons.
                            </p>
                            <p>
                                As if doing this collab to begin with wasn’t awesome enough, I can honestly say that I love all the members of this band—it’s been quite the journey so far, and I’m excited to see where we go next! While I don’t always watch the anime of every song I perform or necessarily have heard it before practicing it, I do enjoy all the songs I sing; however, my absolute favorite is “Simple and Clean.” Our arrangement for it is beautiful, and it’s always been a fun song for me to sing, even growing up.
                            </p>
                            <p>
                                Thanks for reading up on me, and I hope to see you at one of our shows in the future!
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Amaya;
