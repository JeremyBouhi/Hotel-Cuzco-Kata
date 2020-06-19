import { Chambre } from './chambre'
import { ChambresRepository } from './port/chambres-repository'

export class Guichet {
    constructor (private chambresRepository: ChambresRepository) {
    }

    recupereLesChambresAdequates(checkIn: Date, checkOut: Date, nombreDeVoyageurs: number):Chambre[]{
        return this.chambresRepository.getToutesLesChambres().filter(chambre => chambre.getCapacité()>= nombreDeVoyageurs);
    }

 }