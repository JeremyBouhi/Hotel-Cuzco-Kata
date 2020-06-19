import { Chambre } from './chambre'
import { ChambresRepository } from './port/chambres-repository'

export class Hotel {
    constructor (private chambresRepository: ChambresRepository) {
    }

    afficherToutesLesChambres(): string[]{
        let affichageDeToutesLesChambres: string[] = [];

        affichageDeToutesLesChambres.push(`| Etage | Chambre | Description | Capacité |`);
        affichageDeToutesLesChambres.push(`|:-----:|:----:|---------------------------------------------------------------------------------------------------------------|:--------------:|`);

        this.chambresRepository.getToutesLesChambres().forEach((chambre: Chambre) => {
            affichageDeToutesLesChambres.push([
                '| ' + chambre.getÉtage(),
                chambre.getNuméro(),
                chambre.getDescription(),
                chambre.getCapacité() + ' guest' + (chambre.getCapacité() > 1 ? 's':'') + ' |',
                ].join(' | '));
        });

        return affichageDeToutesLesChambres;
    }
}
