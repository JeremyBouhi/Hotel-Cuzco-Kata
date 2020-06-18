import { Chambre } from '../chambre'

export interface ChambresRepository {
    getToutesLesChambres (): Chambre[]
}
