import Navbar from './Navbar';
import Head from 'next/head';
import { Html } from 'next/document';
import '../styles/style.scss';
import Footer from './Footer';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Layout = ({ children, router }) => {
    const [homePage, setHomePage] = useState(true);

    useEffect(() => {
        console.log('router', router);
        if (router.pathname !== '/') {
            setHomePage(false);
        } else {
            setHomePage(true);
        }
        console.log('homePage', homePage);
    }, []);

    return (
        <div className='layout' style={{ marginTop: homePage ? '' : '64px' }}>
            <Head>
                <Html lang='en'>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <title>HireMe</title>
                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css' />

                    <script defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'></script>
                </Html>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default withRouter(Layout);
