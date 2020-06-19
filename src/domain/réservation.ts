export class Réservation {
    constructor (private checkIn: Date,
                 private checkOut: Date,
                 private nombreDeVoyageurs: number) {
    }

    checkAuMoinsUneNuit(): boolean {
        return this.checkIn < this.checkOut
    }

}
