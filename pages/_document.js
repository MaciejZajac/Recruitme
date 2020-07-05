import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <title>HireMe</title>
                <Head>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                    />
                    <link
                        rel='stylesheet'
                        href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'
                    />

                    <script
                        defer
                        src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'
                    ></script>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
