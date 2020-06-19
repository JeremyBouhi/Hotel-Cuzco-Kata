import { RéservationRepository } from '../core/port/réservation-repository'
import { Réservation } from '../core/entités/réservation'
import * as fs from 'fs'
import * as path from 'path';

export class RéservationRepositoryImpl implements RéservationRepository {
    enregistrer(réservation: Réservation): void {
        const filePath = './historique-des-réservations.json'
        fs.writeFileSync(path.resolve(__dirname, filePath), JSON.stringify(réservation))
    }
}
