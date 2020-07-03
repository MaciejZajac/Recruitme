import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <>
            <div className='home'>
                <div className='home__intro'>
                    <h2>Let's create</h2>
                    <h1>RealITy together!</h1>
                    <div>
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
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>Zobacz jak możemy wesprzeć twój biznes</h1>
                    <h2 className='subtitle'>
                        Rozumiemy otoczenie biznesowe w którym działamy, dlatego proponujemy i wdrażamy rozwiązania IT
                        najlepsze dla Twoich potrzeb biznesowych.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default HomePage;
