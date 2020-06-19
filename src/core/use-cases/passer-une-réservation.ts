import { Réservation } from '../entités/réservation'
import { RéservationRepository } from '../port/réservation-repository'

export class PasserUneRéservation {

    constructor (private readonly  réservationRepository: RéservationRepository) {
    }

    execute (réservation: Réservation): void{
        //TODO: réservationRepository.checkAuMoinsUneNuit
        this.réservationRepository.enregistrer(réservation)
    }
}
