import {RéservationRepositoryImpl} from '../../src/infrastructure/réservation-repository-impl';
import {Réservation} from '../../src/core/entités/réservation';
import * as fs from 'fs';

describe(`enregistrer`, ()=> {
    it(`vérifie que la réservation est bien enregistré dans le fichier json`, ()=> {
        //given
        const réservationRepository = new RéservationRepositoryImpl();
        const réservation = new Réservation(new Date(2020,6,19), new Date(2020,6,20), 4, 102);

        //when
        réservationRepository.enregistrer(réservation);
        //then
        const filePath = '../../src/infrastructure/historique-des-réservations.json';
        let result:string;
        fs.readFile(filePath, (err, réservations) => {
            try {
            console.log(réservations);
                //result = JSON.parse(réservations.toString())
            } catch(err) {
                console.log(err);
            }
        })
        expect(result).toEqual('');
    });
});