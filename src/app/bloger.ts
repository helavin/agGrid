// export interface Bloger {
// }

// export class Article {
//    constructor(public id: number, public title: string, public category: string) {
//    }
// }

// new class
// import { IDataBaseObj } from './idata-base-obj';
// import { TableMap } from '../shared/table-map';

export interface IBloger {
    publishedAt?: string;
    // category?: string;
    // origin?: string;
    // age?: number;
    // dateCreated?: Date;
    // dateObtained?: Date;

    // companyKey?: string;
}

export class Bloger implements IBloger {
    // static tableName: string = TableMap.Articles;

    // id: string;

    publishedAt: string;
    // category: string;
    // origin: string;
    // age: number;
    // dateCreated: Date;
    // dateObtained: Date;

    // companyKey: string;

    constructor(props: IBloger) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}

