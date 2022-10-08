import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("./Layout"), {ssr: false});
function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
