import {Site} from './Site';

export class School {
    public id: number;
    public name: string;
    public address: string;
    public slogon: string;
    public email: string;
    public tel: string;
    public sites: Site[] = [];

    constructor() {}

}

