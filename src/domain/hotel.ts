import { Chambre } from './chambre'
import { ChambresRepository } from './port/chambres-repository'

export class Hotel {
    constructor (private chambresRepository: ChambresRepository) {
    }

    récupérerToutesLesChambres(): Chambre[] {
        return this.chambresRepository.getToutesLesChambres()
    }
}
