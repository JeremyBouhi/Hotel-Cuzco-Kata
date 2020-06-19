import { Chambre } from '../chambre'

export interface ChambresRepository {
    récupérerLesChambresAvecLaBonneCapacité(nombreDeVoyageurs: number): Chambre[]
    getToutesLesChambres (): Chambre[]
}
