import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Preloader = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../preloader.json')
        })
    }, [])

    return (
        <div className="container" ref={container} style={{height: "200px", marginTop: "20vh"}}></div>
    )
}

export default Preloader;