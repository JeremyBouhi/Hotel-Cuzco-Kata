import { Chambre } from './chambre'
import { ChambresRepository } from './port/chambres-repository'

export class Guichet {
    constructor (private chambresRepository: ChambresRepository,
                 private ) {
    }

    recupereLesChambresAdequates(checkIn: Date, checkOut: Date, nombreDeVoyageurs: number):Chambre[]{
    }

 }