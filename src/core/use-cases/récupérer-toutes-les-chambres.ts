import { Chambre } from '../entités/chambre'
import { ChambresRepository } from '../port/chambres-repository'

export class RécupérerToutesLesChambres {

    constructor (private readonly chambresRepository: ChambresRepository) {
    }

    execute(): Chambre[] {
        return this.chambresRepository.getToutesLesChambres()
    }
}
