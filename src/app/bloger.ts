import { IBloger } from './bloger';
// TODO: или использовать для типизации ответа с API
// или удалить
export interface IBloger {
    thumbnail: string;
    publishedAt: string;
    title: string;
    pathLink: string;
    videoId: string;
    description: string;
}

export class Bloger implements IBloger {
    thumbnail: string;
    publishedAt: string;
    title: string;
    pathLink: string;
    videoId: string;
    description: string;

    constructor(props: IBloger) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });

    }
}
