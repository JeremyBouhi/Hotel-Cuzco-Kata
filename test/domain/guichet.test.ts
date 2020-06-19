import { Chambre } from '../../src/domain/chambre'
import { Hotel } from '../../src/domain/hotel'
import { ChambresRepository } from '../../src/domain/port/chambres-repository'

describe('recupereLesChambresAdequates', () => {
    it('retourne la liste des chambres pouvant accueillir tous les voyageurs', () => {
        //Given
        const premièreChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 2)
        const deuxièmeChambre = new Chambre(1, 102, '2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible', 4)
        const chambresRepository: ChambresRepository = {
            getToutesLesChambres: jest.fn().mockReturnValue([premièreChambre, deuxièmeChambre])
        }
        const guichet = new Guichet(chambresRepository);

        // When
        const result = guichet.recupereLesChambresAdequates(new Date(2020, 6, 18), new Date(2020, 6, 20), 2);

        // Then
        expect(result).toEqual([premièreChambre]);
    })
});
