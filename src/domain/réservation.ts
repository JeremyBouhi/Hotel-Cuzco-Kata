import { Chambre } from './chambre'

export class Réservation {
    constructor (private checkIn: Date,
                 private checkOut: Date,
                 private nombreDeVoyageurs: number,
                 private chambre: Chambre) {
    }

    getAuMoinsUneNuit(): boolean {
        return this.checkIn < this.checkOut
    }

}
