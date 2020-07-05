import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Particles from 'react-particles-js';
import OfferSection from './OfferComponents/OfferSection';

function HomePage() {
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    }, []);
    return (
        <>
            <div className='home'>
                {isDesktop && (
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 150,
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
                <div className='home__intro'>
                    <h2>Let's create</h2>
                    <h1>RealITy together!</h1>
                    <div className='home__button'>
                        <Link href='/'>
                            <a>
                                <button className='btn'>Szukam pracy</button>
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
    );
}

export default HomePage;

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>Zobacz jak możemy wesprzeć twój biznes</h1>
                    <h2 className='subtitle'>
                        Rozumiemy otoczenie biznesowe w którym działamy, dlatego proponujemy i wdrażamy rozwiązania IT
                        najlepsze dla Twoich potrzeb biznesowych.
                    </h2>
                </div>
            </div>
        </section>
    );
};
