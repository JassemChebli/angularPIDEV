import {School} from './School';

export class Site {
    public id: number;
    public address: string;
    public nom: string;
    public nbrMaxEnc: number;
    public nbrMaxSup: number;
    public nbrMaxPres: number;
    public nbrMaxVal: number;
    public dateOfSessionStarts: Date;
    public dateOfSessionEnds:Date;
    public school: School;

    constructor() {

    }
}
