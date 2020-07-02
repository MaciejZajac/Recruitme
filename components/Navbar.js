import Link from 'next/link';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setIsOnTop(false);
        } else {
            setIsOnTop(true);
        }
    });

    return (
        <div>
            <nav
                className={`navbar  is-fixed-top is-transparent ${
                    isOnTop ? 'navbar--ontop ' : ' is-light '
                }`}
                role='navigation'
                aria-label='main navigation'
            >
                <div className='navbar-brand'>
                    <Link href='/'>
                        <a className='navbar-item'>HireMe</a>
                    </Link>

                    <a
                        role='button'
                        className={`navbar-burger burger ${
                            menuOpen ? 'is-active' : ''
                        }`}
                        aria-label='menu'
                        aria-expanded='false'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <Link href='/'>
                                <a className='navbar-item'>Home</a>
                            </Link>
                            <Link href='/about'>
                                <a className='navbar-item'>O nas</a>
                            </Link>
                            <Link href='/blog'>
                                <a className='navbar-item'>Blog</a>
                            </Link>
                            <Link href='/kontakt'>
                                <a className='navbar-item'>Kontakt</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
