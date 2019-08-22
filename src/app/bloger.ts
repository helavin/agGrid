export interface IBloger {
    publishedAt?: string;
    // age?: number;
    // dateCreated?: Date;
}

export class Bloger implements IBloger {

    publishedAt: string;
    // age: number;
    // dateCreated: Date;

    constructor(props: IBloger) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });

    }
}

