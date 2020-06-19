import { Réservation } from '../entités/réservation'

export  interface RéservationRepository {
    enregistrer(réservation: Réservation):void;
}
