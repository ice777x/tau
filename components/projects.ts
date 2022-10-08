export interface Projects {
    title: string;
    description: string;
    image: string;
    url: string;
}

const telegram: Projects[] | [] = [
    {
        title: "Tauon",
        description: "A 3rd party Telegram Userbot written in Python",
        image: "/TAU.jpg",
        url: "https://github.com/ice777x/tauon",
    },
];

const javascript: Projects[] | [] = [];

const python: Projects[] | [] = [
    {
        title: "Open-API",
        description: "A simple API for getting information from everywhere",
        image: "/restapi.jpg",
        url: "https://github.com/ice777x/API",
    },
    {
        title: "Tauon",
        description: "A 3rd party Telegram Userbot written in Python",
        image: "/TAU.jpg",
        url: "https://github.com/ice777x/tauon",
    },
];

export {telegram, python, javascript};
