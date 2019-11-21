import { IBloger } from './bloger';
export interface IBloger {
    thumbnail: string;
    publishedAt: string;
    title: string;
    openLink: string;
    videoId: string;
    description: string;
}

export class Bloger implements IBloger {
    thumbnail: string;
    publishedAt: string;
    title: string;
    openLink: string;
    videoId: string;
    description: string;

    constructor(props: IBloger) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });

    }
}

