import {Site} from './Site';
import {Admin} from './Admin';

export class School {
    public id: number;
    public name: string;
    public address: string;
    public slogon: string;
    public email: string;
    public tel: string;
    public sites: Site[] = [];
    public admin = new Admin() ;

    constructor() {}

}

