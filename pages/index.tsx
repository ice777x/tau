import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/future/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import {javascript, python, telegram} from "../components/projects";

const Article = dynamic(() => import("../components/Article"), {ssr: false});

const Home: NextPage = () => {
    const [articles, setArticles] = React.useState<any>(javascript);
    const handlePython = () => {
        setArticles(python);
    };
    const handleJavascript = () => {
        setArticles(javascript);
    };
    const handleTelegram = () => {
        setArticles(telegram);
    };
    const handleObject = [
        {
            title: "Javascript",
            handle: handleJavascript,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        },
        {
            title: "Python",
            handle: handlePython,
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
            title: "Telegram",
            handle: handleTelegram,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
        },
    ];
    return (
        <>
            <Head>
                <title>ice777</title>
            </Head>
            <main>
                <div className="bg-[url('/ana.jpg')] bg-cover bg-fixed  bg-center min-h-[576px]">
                    <div className="flex flex-col   justify-center items-center min-h-[576px]">
                        <div className="flex justify-center max-w-[80%]">
                            <div className="flex flex-wrap bg-white dark:bg-slate-800  rounded p-6 text-slate-900/[0.90] justify-center flex-col w-max">
                                <div>
                                    <p className="text-3xl sm:text-2xl  dark:text-zinc-300 font-bold font-sans ">
                                        Hi. I'm ice777. I'm learning web
                                        development
                                    </p>
                                </div>
                                <div className="social-media flex items-end  dark:text-zinc-400 flex-col space-y-4 mt-4">
                                    <div className="image inline">
                                        <Link href="https://twitter.com/ice777x">
                                            <a className="text-xl font-medium font-sans group flex items-center hover:text-sky-400 shadow-2xl">
                                                <div className="image">
                                                    <Image
                                                        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                                                        alt="twitter"
                                                        width={32}
                                                        height={32}
                                                        className="inline mr-3"
                                                    />
                                                </div>
                                                <span className="text-sm justify-center flex group-hover:text-sky-400  dark:text-white text">
                                                    ice777x
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="image inline">
                                        <Link href="https://t.me/ice777x">
                                            <a className="text-xl font-medium  group font-sans flex items-center dark:text-white hover:text-sky-400 shadow-2xl">
                                                <Image
                                                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                                                    alt="telegram"
                                                    width={32}
                                                    height={32}
                                                    className="inline mr-3"
                                                />
                                                <span className="text-sm justify-center group-hover:text-sky-400 flex ">
                                                    ice777x
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="inline">
                                        <Link
                                            href={"https://github.com/ice777x"}
                                        >
                                            <a className="text-xl font-medium  group font-sans flex items-center hover:text-sky-400 shadow-2xl">
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    className="w-8 mr-3 inline"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    aria-label="GitHub"
                                                >
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                                </svg>
                                                <span className="text-sm dark:text-white group-hover:text-sky-400 text">
                                                    ice777x
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="portfolio clear-both lg:px-[40px] mt-8">
                    <div className="">
                        <div className="flex md:flex-row flex-col">
                            <div className="side hidden md:block">
                                <div className="flex flex-col space-y-6  px-10">
                                    {handleObject.map((el, i) => {
                                        return (
                                            <div
                                                className="border border-slate-400 rounded-xl min-w-max  flex items-center  cursor-pointer hover:bg-indigo-700 hover:scale-105 transition-all ease-in-out duration-300"
                                                onClick={el.handle}
                                            >
                                                <div className="px-4 w-full py-2 space-x-4">
                                                    <div className="inline">
                                                        <Image
                                                            src={el.image}
                                                            alt={el.title}
                                                            width={28}
                                                            height={28}
                                                            className="inline"
                                                        />
                                                    </div>
                                                    <span className="text-lg  font-medium font-sans">
                                                        {el.title}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="top-nav block md:hidden mb-4">
                                <div className="flex flex-row gap-4 px-[30px] w-full flex-wrap">
                                    {handleObject.map((el, i) => {
                                        return (
                                            <div
                                                className="border border-slate-400 rounded-xl min-w-max  w-44 flex items-center box-content cursor-pointer hover:bg-indigo-700 hover:scale-105 transition-all ease-in-out duration-300"
                                                onClick={el.handle}
                                            >
                                                <div className="px-4 w-full py-2 space-x-4">
                                                    <div className="inline">
                                                        <Image
                                                            src={el.image}
                                                            alt={el.title}
                                                            width={28}
                                                            height={28}
                                                            className="inline"
                                                        />
                                                    </div>
                                                    <span className="text-lg  font-medium font-sans">
                                                        {el.title}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-row px-[18px] md:px-0">
                                {articles.map((el: any, i: number) => {
                                    if (i === 0) {
                                        return (
                                            <Article
                                                key={i}
                                                image={el.image || "/ana.jpg"}
                                                title={el.title}
                                                description={el.description}
                                                url={el.url || "/ana.jpg"}
                                                big={true}
                                            />
                                        );
                                    } else {
                                        return (
                                            <Article
                                                key={i}
                                                title={el.title}
                                                image={el.image || "/ana.jpg"}
                                                description={el.description}
                                                url={el.url || ""}
                                                big={false}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
