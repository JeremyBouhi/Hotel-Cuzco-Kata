import { AfficheurRepository } from '../core/port/afficheur-repository'

export class AfficheurRepositoryImpl implements AfficheurRepository {
    execute (data: any): void {
        console.table(data)
    }
}
