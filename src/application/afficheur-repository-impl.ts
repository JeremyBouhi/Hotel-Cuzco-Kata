import { AfficheurRepository } from '../domain/port/afficheur-repository'

export class AfficheurRepositoryImpl implements AfficheurRepository {
    execute (data: any): void {
        console.table(data)
    }
}
