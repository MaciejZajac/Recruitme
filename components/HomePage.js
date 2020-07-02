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
                        <Link href='/'>
                            <a>
                                <button className='btn'>
                                    Szukam pracownika
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div>Zobacz jak możemy wesprzeć twój biznes</div>
            </div>
        </>
    );
}

export default HomePage;
