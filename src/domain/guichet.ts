import { Chambre } from './chambre'
import { Réservation } from './réservation'
import { ChambresRepository } from './port/chambres-repository'
import { RéservationRepository } from './port/réservation-repository'

export class Guichet {
    constructor (private chambresRepository: ChambresRepository,
                    private réservationRepository: RéservationRepository) {
    }

    recupereLesChambresAdequates(checkIn: Date, checkOut: Date, nombreDeVoyageurs: number):Chambre[]{
        return this.chambresRepository.getToutesLesChambres().filter(chambre => chambre.getCapacité() >= nombreDeVoyageurs);
    }

    passerUneRéservation(réservation:Réservation): void{
        this.réservationRepository.enregistrerRéservation(réservation);
    }

 }
