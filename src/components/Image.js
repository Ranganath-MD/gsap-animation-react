import React, { useRef, useEffect } from 'react'
import logo from '../logo.svg';
import { TweenMax, Power3 } from "gsap";

const Image = () => {
    let image = useRef(null)

    useEffect(() => {
        TweenMax.to(image, 0.8, { opacity: 1, y: -40, ease: Power3.easeOut })
    }, [])
    return (
        <div className="logo-img">
            <img
                ref={el => { image = el }}
                src={logo}
                className="App-logo"
                alt="logo"
            />
        </div>
    )
}

export default Image
