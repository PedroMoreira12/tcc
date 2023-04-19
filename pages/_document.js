import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    //other background options: F9F9F9, FFFFFF, EBF5FA
    render() {
        return (
            <Html>
                <Head />
                <body style={{ backgroundColor: '#F9F9F9' }}>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;