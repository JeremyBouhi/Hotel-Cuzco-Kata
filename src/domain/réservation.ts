export class Réservation {
    constructor (private checkIn: Date,
                 private checkOut: Date,
                 private nombreDeVoyageurs: number,
                 private numéroChambre: number) {
    }

    checkAuMoinsUneNuit(): boolean {
        return this.checkIn < this.checkOut
    }

}
