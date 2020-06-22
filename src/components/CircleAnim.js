import React, { useEffect, useRef, useState } from 'react'
import { TweenMax, Power3 } from 'gsap';

const CircleAnim = () => {
    const [circleState, setCircleState] = useState(false)
    let circle = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    useEffect(() => {
        // TweenMax.from(circle, 1, { opacity: 0, ease: Power3.easeInOut, x: 40, delay: .6 })
        // TweenMax.from(circleRed, 1, { opacity: 0, ease: Power3.easeInOut, x: 40, delay: .6 })
        // TweenMax.from(circleBlue, 1, { opacity: 0, ease: Power3.easeInOut, x: 40, delay: .6 })

        TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, { opacity: 0, ease: Power3.easeOut, x: 40, delay: .6 }, .6)
    }, [])

    const handleClick = () => {
        setCircleState(!circleState)
        if (circleState) {
            TweenMax.to(circleRed, .8, { width: 75, height: 75, ease: Power3.easeInOut })
        } else {
            TweenMax.to(circleRed, .8, { width: 200, height: 200, ease: Power3.easeInOut })
        }
    }

    return (
        <div>
            <p>click on the <b>Red</b> circle</p>
            <div className="circle-container">
                <div
                    ref={el => { circle = el }}
                    className="circle"></div>
                <div
                    ref={el => { circleRed = el }}
                    onClick={handleClick}
                    className="circle red"></div>
                <div
                    ref={el => { circleBlue = el }}
                    className="circle blue"></div>
            </div>
        </div>
    )
}

export default CircleAnim
