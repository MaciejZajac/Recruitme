import Navbar from './Navbar';
import Head from 'next/head';
import { Html } from 'next/document';
import '../styles/style.scss';
import Footer from './Footer';
const Layout = (props) => (
    <div>
        <Head>
            <Html lang='en'>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>HireMe</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css' />

                <script defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'></script>
            </Html>
        </Head>
        <Navbar />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
