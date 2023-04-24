import '../styles/globals.css';
import Layout from "../components/common/Layout";
import { useState, useEffect } from "react";

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }) {
    const [postTitleStates, setPostTitlesStates] = useState(null)

    function changeState(index) {
        setPostTitlesStates((prevState) => {
            const newState = {};
            for (const key in prevState) {
                if (Object.prototype.hasOwnProperty.call(prevState, key)) {
                    newState[key] = false;
                }
            }
            newState[index] = true;
            return newState;
        });
    }
    return (
        <>
            <Layout changeState={changeState}>
                <Component {...pageProps} postTitleStates={postTitleStates}/>
            </Layout>
        </>
    )
}
