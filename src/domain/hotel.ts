import { Chambre } from './chambre'

export class Hotel {
    constructor (private chambres: Chambre[]) {

    }

    afficherToutesLesChambres():string[]{
        let affichageDeToutesLesChambres: string[] ;
        affichageDeToutesLesChambres.push(`| Etage | Chambre | Description | Capacité |`);
        affichageDeToutesLesChambres.push(`|:-----:|:----:|---------------------------------------------------------------------------------------------------------------|:--------------:|`);
        this.chambres.forEach((chambre)  => {
            affichageDeToutesLesChambres.push(chambre);
        });
        return affichageDeToutesLesChambres;
    }
}
