import {School} from './School';
import {HeadDepartment} from './HeadDepartment';

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
    public internshipDirector: HeadDepartment;

    constructor() {

    }
}
