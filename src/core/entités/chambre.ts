export class Chambre {
    constructor (private étage: number,
                 private numéro: number,
                 private description: string,
                 private capacité: number) {
    }

    getÉtage (): number {
        return this.étage
    }

    getNuméro (): number {
        return this.numéro
    }

    getDescription (): string {
        return this.description
    }

    getCapacité (): number {
        return this.capacité
    }

    
}
