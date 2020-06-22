import React, { useRef, useEffect } from 'react'
import { TimelineLite, TweenMax, Power2 } from 'gsap';

const Text = () => {
    let content = useRef(null)
    let tl = new TimelineLite({ delay: .8 });

    useEffect(() => {
        const firstLine = content.children[0].children[0]
        const secondLine = firstLine.nextSibling
        const thirdLine = secondLine.nextSibling
        const contentP = content.children[1];

        //remove an initial flash
        TweenMax.to(content, 0, { css: { visibility: 'visible' } })

        tl.staggerFrom([firstLine.children, secondLine.children, thirdLine.children], 1, {
            x: 44,
            opacity: 0,
            ease: Power2.easeOut,
            delay: .4
        }, .15, 'Start')
            .from(contentP, 1, { y: 20, opacity: 0, ease: Power2.easeOut }, 1.4)
    }, [tl])
    return (
        <div ref={el => content = el}>
            <h1>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner">Developer is an organism </div>
                </div>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner">that turns coffee </div>
                </div>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner">into code.</div>
                </div>
            </h1>
            <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
            </p>
        </div>
    )
}

export default Text
