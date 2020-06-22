import React, { useEffect, useRef } from 'react'
import { Power3, TimelineLite } from 'gsap';
import image from '../newyork.png'
import "../banner.scss"

const BannerAnim = () => {
    let bannerBG = useRef(null);

    let headline1 = useRef(null);
    let headline2 = useRef(null);
    let headline3 = useRef(null);
    let ctaButton = useRef(null);
    let message = useRef(null);
    let imageNY = useRef(null);
    const tl = new TimelineLite();


    const letsAnimate = () => {
        tl.from(bannerBG, .8, { width: 0, ease: Power3.easeOut })
            .staggerFrom([headline1, headline2, headline3, ctaButton, message], 1, { opacity: 0, y: 20, ease: Power3.easeOut }, .2)
            .from(imageNY, 1.2, { scale: 1.25, opacity: 0, ease: Power3.easeInOut, delay: -1 })
    }

    useEffect(() => {
        letsAnimate()
    })

    return (
        <>
            <div>
                <h1>Banner Animation</h1>
                <button onClick={letsAnimate}>Play</button>
                <section
                    ref={el => { bannerBG = el }}
                    className="banner-bg">
                    <div className="container">
                        <div className="cta">
                            <div className="headline">
                                <>
                                    <h2 ref={el => headline1 = el}>This is just some text</h2>
                                    <h2 ref={el => headline2 = el}>and I couldn’t figure out</h2>
                                    <h2 ref={el => headline3 = el}>what to say.</h2>
                                </>
                                <>
                                    <div ref={el => { ctaButton = el }} className="cta-button">
                                        <span>Let's get started</span>
                                    </div>
                                </>
                            </div>
                            <div ref={el => message = el} className="message">
                                <span >
                                    Always wanted to travel but don’t have the right funds to? We
                                    plan the cheapest travel routes for the ultimate experience.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                    <button onClick={letsAnimate}>Play</button>
                <div className="newyork">
                    <div className="container">
                        <div className="image">
                            <img ref={el => imageNY = el} src={image} alt="building"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerAnim
