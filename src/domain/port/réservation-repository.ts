import { Réservation } from '../réservation'

export  interface RéservationRepository {
    enregistrerRéservation(réservation: Réservation):void;
}
