import { Chambre } from '../entités/chambre'
import { ChambresRepository } from '../port/chambres-repository'

export class RécupererLesChambresDisponibles {

    constructor (private readonly chambresRepository: ChambresRepository) {}

    execute (nombreDeVoyageurs: number): Chambre[] {
        return this.chambresRepository.récupérerLesChambresAvecLaBonneCapacité(nombreDeVoyageurs)
    }
}
