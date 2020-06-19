import { Réservation } from '../../../src/core/entités/réservation'
import { RéservationRepository } from '../../../src/core/port/réservation-repository'
import { PasserUneRéservation } from '../../../src/core/use-cases/passer-une-réservation'

describe(`passerUneRéservation`,()=> {
    it(`vérifie l'enregistrement de la réservation`, ()=> {
        //given
        const checkIn = new Date(2020,6,19);
        const checkOut = new Date(2020,6,24);
        const nombreDeVoyageurs = 4;
        const numéroDeChambre = 102;
        const réservation = new Réservation(checkIn, checkOut, nombreDeVoyageurs, numéroDeChambre);

        const réservationRepositoryStub : RéservationRepository = {
            enregistrer: jest.fn()
        }

        const passerUneRéservation = new PasserUneRéservation(réservationRepositoryStub)

        //when
        passerUneRéservation.execute(réservation)

        //then
        expect(réservationRepositoryStub.enregistrer).toHaveBeenCalledWith(réservation);
    });
});
