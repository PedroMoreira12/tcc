import '../styles/globals.css';
import Layout from "../components/common/Layout";

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

