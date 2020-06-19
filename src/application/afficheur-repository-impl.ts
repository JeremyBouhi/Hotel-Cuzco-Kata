import { AfficheurRepository } from '../domain/port/afficheur-repository'

export class AfficheurRepositoryImpl implements AfficheurRepository {
    execute (data: string[]): void {
        console.log(data)
    }
}
