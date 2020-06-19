import { Chambre } from '../entités/chambre'

export interface ChambresRepository {
    récupérerLesChambresAvecLaBonneCapacité (nombreDeVoyageurs: number): Chambre[]
    getToutesLesChambres (): Chambre[]
}
