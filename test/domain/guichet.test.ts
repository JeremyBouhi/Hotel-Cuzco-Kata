import { Chambre } from '../../src/domain/chambre'
import { Réservation } from '../../src/domain/réservation'
import { ChambresRepository } from '../../src/domain/port/chambres-repository'
import { RéservationRepository } from '../../src/domain/port/réservation-repository'
import { Guichet } from '../../src/domain/guichet'

describe(`Guichet | Tests`, ()=> {
    let guichet:Guichet;
    let premièreChambre:Chambre;
    let deuxièmeChambre:Chambre;
    let chambresRepository:ChambresRepository;
    let réservationRepository:RéservationRepository;

    beforeEach(()=> {
        premièreChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 2)
        deuxièmeChambre = new Chambre(1, 102, '2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible', 4)
        chambresRepository = {
              getToutesLesChambres: jest.fn().mockReturnValue([premièreChambre, deuxièmeChambre])
        }
        réservationRepository = {
                        enregistrerRéservation: jest.fn()
        }
        guichet = new Guichet(chambresRepository, réservationRepository);

    });
    describe('recupereLesChambresAdequates', () => {
        it('retourne la liste des chambres pouvant accueillir tous les voyageurs', () => {
            // When
            const result = guichet.recupereLesChambresAdequates(new Date(2020, 6, 18), new Date(2020, 6, 20), 4);

            // Then
            expect(result).toEqual([deuxièmeChambre]);
        })
    });

    describe(`passerUneRéservation`,()=> {
        it(`vérifie l'enregistrement de la réservation`, ()=> {
            //given
            const checkIn = new Date(2020,6,19);
            const checkOut = new Date(2020,6,24);
            const nombreDeVoyageurs = 4;
            const numéroDeChambre = 102;
            const réservation = new Réservation(checkIn, checkOut, nombreDeVoyageurs, numéroDeChambre);

            //when
            guichet.passerUneRéservation(réservation);

            //then
            expect(réservationRepository.enregistrerRéservation).toHaveBeenCalledWith(réservation);
        });
    });
});

