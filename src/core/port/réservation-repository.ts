import { Réservation } from '../réservation'

export  interface RéservationRepository {
    enregistrer(réservation: Réservation):void;
}
