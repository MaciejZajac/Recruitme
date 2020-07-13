import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Particles from 'react-particles-js'
import OfferSection from './OfferComponents/OfferSection'
import Hero from './Hero'

function HomePage() {
    const [isDesktop, setIsDesktop] = useState(true)
    useEffect(() => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            setIsDesktop(false)
        } else {
            setIsDesktop(true)
        }
    }, [])
    return (
        <>
            <div className="home">
                {isDesktop && (
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 75,
                                },
                                size: {
                                    value: 3,
                                },
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: 'repulse',
                                    },
                                },
                            },
                        }}
                        style={{
                            position: 'absolute',
                        }}
                    />
                )}
                <div className="home__intro">
                    <h2>Let's create</h2>
                    <h1>RealITy together!</h1>
                    <div className="home__button">
                        <Link href="/offers">
                            <a>
                                <button className="btn">Szukam pracy</button>
                            </a>
                        </Link>
                        {/* <Link href='/'>
                            <a>
                                <button className='btn'>
                                    Szukam pracownika
                                </button>
                            </a>
                        </Link> */}
                    </div>
                </div>
            </div>
            <Hero />
            <OfferSection />
        </>
    )
}

export default HomePage
