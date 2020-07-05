import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <div className='columns'>
                    <div className='column is-half is-offset-one-quarter'>
                        <div className='columns'>
                            <div className='column '>
                                <ul className='footer__list'>
                                    <li>
                                        <a
                                            href='https://github.com/MaciejZajac'
                                            className='footer__link'
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.linkedin.com/in/maciejzajac534/'
                                            className='footer__link'
                                        >
                                            Linkedin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='column '>
                                <ul className='footer__list'>
                                    <li>
                                        <Link href='/about'>
                                            <a>O nas</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>
                                            <a>Kontakt</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content has-text-centered'>
                <strong>@Maciej Zając</strong>
            </div>
        </footer>
    );
};

export default Footer;
