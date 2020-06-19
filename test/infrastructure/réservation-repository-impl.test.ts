import {RéservationRepositoryImpl} from '../../src/infrastructure/réservation-repository-impl';
import {Réservation} from '../../src/core/entités/réservation';
import * as fs from 'fs';
import * as path from 'path';

describe(`enregistrer`, ()=> {
    it(`vérifie que la réservation est bien enregistré dans le fichier json`, async ()=> {
        //given
        const réservationRepository = new RéservationRepositoryImpl();
        const réservation = new Réservation(new Date(2020,6,19), new Date(2020,6,20), 4, 102);
        const filePath = '../../src/infrastructure/historique-des-réservations.json';

        //when
        réservationRepository.enregistrer(réservation);

        //then
        const result = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath)).toString());
        expect(result).toEqual({"checkIn": "2020-07-18T22:00:00.000Z", "checkOut": "2020-07-19T22:00:00.000Z", "nombreDeVoyageurs": 4, "numéroChambre": 102});
    });
});
