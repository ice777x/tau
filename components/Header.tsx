import React from "react";
import Link from "next/link";
import {BsMoonStarsFill, BsMoonStars} from "react-icons/bs";
import {useTheme} from "next-themes";
function Header() {
    const {theme, setTheme} = useTheme();
    return (
        <div className="sticky top-0 left-0 right-0 z-50 h-[3.5rem] shadow-lg w-full bg-[#051A3B]">
            <div className="flex items-center w-full justify-between h-full px-4 mx-auto max-w-7xl">
                <div className="logo">
                    <Link href="/">
                        <a className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 text-white bg-[#051A3B] rounded-full">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-base text-white font-medium">
                                    ice777
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="menu cursor-pointer ">
                    <div className="flex items-center justify-center  text-white bg-[#051A3B] rounded-full">
                        <div
                            className="mr-3"
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            {theme === "dark" ? (
                                <BsMoonStarsFill size={17} />
                            ) : (
                                <BsMoonStars size={17} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
