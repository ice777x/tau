import React from "react";
import Image from "next/future/image";
import Link from "next/link";
function Article({
    image,
    title,
    description,
    url,
    big,
}: {
    image: string;
    title: string;
    description: string;
    url: string;
    big: boolean;
}) {
    return (
        <article
            className={
                big
                    ? "px-4 pb-4 mt-2 lg:max-w-[66.6666%] max-w-full"
                    : "px-4 pb-4 mt-2 lg:max-w-[33.3333333%] lg:flex-33 max-w-full sm:max-w-[50%]"
            }
        >
            <div className="h-full duration-200  hover:shadow-2xl hover:drop-shadow-xl transition-all ease-in-out bg-white text-black">
                <Link href={url}>
                    <a className="group flex flex-col">
                        <div className="image ">
                            <div className={big ? "h-60" : "h-44"}>
                                <Image
                                    src={image || "nasa.jpg"}
                                    alt={title}
                                    className="object-cover h-full"
                                    width={1920}
                                    height={1080}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="content__text  mt-2 min-h-[180px] px-8  pt-6 pb-8">
                            <div className="description h-full font-sans text-gray-700">
                                <div className="flex-1 text-slate-900 font-medium text-xl mb-2">
                                    <a
                                        href={url}
                                        className="group-hover:text-teal-600 capitalize hover:duration-500  hover:ease-in-out hover:transition-colors "
                                    >
                                        {title}
                                    </a>
                                </div>
                                <div className="description overflow-hidden">
                                    <p className="text-sm line-clamp-4 md:line-clamp-6  leading-6  text-ellipsis">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </article>
    );
}

export default Article;
