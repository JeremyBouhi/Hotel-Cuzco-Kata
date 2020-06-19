import { Chambre } from '../../src/core/entités/chambre'
import { Réservation } from '../../src/core/entités/réservation'
import { ChambresRepository } from '../../src/core/port/chambres-repository'
import { RéservationRepository } from '../../src/core/port/réservation-repository'
import { Guichet } from '../../src/core/use-cases/guichet'

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
            getToutesLesChambres: jest.fn().mockReturnValue([premièreChambre, deuxièmeChambre]),
            récupérerLesChambresAvecLaBonneCapacité: jest.fn()
        }
        réservationRepository = {
            enregistrer: jest.fn()
        }
        guichet = new Guichet(chambresRepository, réservationRepository);

    });
    describe('recupereLesChambresAdequates', () => {
        it('vérifie que chambres-repository est appelé avec les bons paramètres', () => {
            // Given
            const nombredeVoyageurs = 4

            // When
            guichet.récupererLesChambresAdéquates(new Date(), new Date(), nombredeVoyageurs);

            // Then
            expect(chambresRepository.récupérerLesChambresAvecLaBonneCapacité).toHaveBeenCalledWith(nombredeVoyageurs)
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
            // @ts-ignore
            guichet.passerUne(réservation);

            //then
            expect(réservationRepository.enregistrer).toHaveBeenCalledWith(réservation);
        });
    });
});

