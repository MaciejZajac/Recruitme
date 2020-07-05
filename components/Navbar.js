import Link from 'next/link'
import { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = ({ router }) => {
    const [homePage, setHomePage] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isOnTop, setIsOnTop] = useState(true)

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setIsOnTop(false)
        } else {
            setIsOnTop(true)
        }
    })

    useEffect(() => {
        if (router.pathname !== '/') {
            setHomePage(false)
        } else {
            setHomePage(true)
        }
    }, [])

    return (
        <nav
            className={`navbar  is-fixed-top is-transparent ${isOnTop ? 'navbar--ontop' : 'is-light'}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">HireMe</a>
                </Link>

                <a
                    role="button"
                    className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link href="/">
                            <a className={`navbar-item ${router.pathname === '/' ? 'is-active' : ''}`}>Home</a>
                        </Link>
                        <Link href="/offers">
                            <a className={`navbar-item ${router.pathname === '/offers' ? 'is-active' : ''}`}>Oferty</a>
                        </Link>
                        <Link href="/about">
                            <a className={`navbar-item ${router.pathname === '/about' ? 'is-active' : ''}`}>O nas</a>
                        </Link>
                        <Link href="/blog">
                            <a className={`navbar-item ${router.pathname === '/blog' ? 'is-active' : ''}`}>Blog</a>
                        </Link>
                        <Link href="/contact">
                            <a className={`navbar-item ${router.pathname === '/contact' ? 'is-active' : ''}`}>
                                Kontakt
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
