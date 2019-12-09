import { PfeStatus } from './PfeStatus';
import { Student } from './Student';
import { Thesis } from './Thesis';
import { Entreprise } from './Entreprise';
import { PfeFileChange } from './PfeFileChange';
import { Categorie } from './Categorie';

export class PfeFile {
    public id: Number;
    public reportDeposite: boolean ;
    public status: PfeStatus ;
    public student: Student ;
    public thesis:  Thesis ;
    public entreprise:  Entreprise ;
    public changes: PfeFileChange[];
    public categories: Categorie[];


    public  title: string ;
	public  description: string;
	public  problematic: string;
	public  functionnalities: string;
	public  keywords: string;
	public  gradeSupervisor:   Number   ;
	public  gradeReporter: Number;
	public  emailPersonel: string;
	public  emailProfessionel: string;






}
