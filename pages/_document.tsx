import Document, {Html, Head, Main, NextScript} from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html
                lang="en"
                className="scroll-smooth font-[Poppins] scrollbar-track-slate-800 scrollbar-track-rounded  scrollbar-thumb-slate-600 scrollbar-thumb-rounded scrollbar-thin hover:scrollbar-thumb-teal-700 "
            >
                <Head />
                <body className="bg-white text-black dark:bg-[#051A3B] dark:text-white break-words antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
