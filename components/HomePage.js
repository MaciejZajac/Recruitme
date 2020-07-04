import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Particles from 'react-particles-js';

function HomePage() {
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        let screenSize;
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
            <section class='hero'>
                <div class='hero-body'>
                    <div class='container'>
                        <h1 class='title'>Zobacz jak możemy wesprzeć twój biznes</h1>
                        <h2 class='subtitle'>
                            Rozumiemy otoczenie biznesowe w którym działamy, dlatego proponujemy i wdrażamy rozwiązania
                            IT najlepsze dla Twoich potrzeb biznesowych.
                        </h2>
                    </div>
                </div>
            </section>
            <section class='section'>
                <div className='columns pb-6 '>
                    <div className='column '>
                        <div className='columns is-multiline'>
                            {offerArr.map((item) => {
                                let wynagrodzenie = '';
                                if (item.salaryFrom) {
                                    wynagrodzenie += 'Od ' + item.salaryFrom + ' zł ';
                                }
                                if (item.salaryTo) {
                                    wynagrodzenie += 'do ' + item.salaryTo + ' zł';
                                }
                                return (
                                    <div className='column is-one-third-desktop' key={item.id}>
                                        <div className='offer'>
                                            Pozycja: {item.position}
                                            <br />
                                            Wynagrodzenie: {wynagrodzenie}
                                            <br />
                                            Doświadczenie: {item.experience} rok
                                            <br />
                                            Lokalizacja: {item.city}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;

const offerArr = [
    {
        position: 'Front-end developer',
        mainTech: ['React', 'JavaScript', 'HTML', 'CSS'],
        salaryFrom: 5000,
        salaryTo: 10000,
        city: 'Kraków',
        experience: 2,
        id: 1,
    },
    {
        position: 'Back-end developer',
        mainTech: ['Java', 'Spring', 'Hibernate'],
        salaryFrom: 6500,
        salaryTo: 11000,
        city: 'Kraków',
        experience: 2.5,
        id: 2,
    },
    {
        position: 'DevOps Engineer',
        salaryFrom: 8000,
        salaryTo: 14000,
        city: 'Kraków',
        experience: 3,
        id: 3,
    },
    {
        position: 'UX/UI designer',
        salaryFrom: 4500,
        salaryTo: 7800,
        city: 'Kraków',
        experience: 1,
        id: 4,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 5,
    },
    {
        position: 'QA Tester',
        salaryFrom: 6000,
        salaryTo: 90000,
        city: 'Kraków',
        experience: 1.5,
        id: 6,
    },
];
