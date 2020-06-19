import { Chambre } from '../../src/core/entités/chambre'
import { ChambresInMemoryRepository } from '../../src/infrastructure/chambres-in-memory-repository'

describe('recupereLesChambresAdequates', () => {
    it('retourne la liste des chambres pouvant accueillir tous les voyageurs', () => {
        // Given

        const expected_chambres: Chambre[] = [
            new Chambre(1, 102, "2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible", 4),
            new Chambre(2, 203, "1 king size bed + 3 single beds - A/C - Wi-Fi - private bathroom", 5)]
        const nombreDeVoyageurs = 4
        const chambresRepository = new ChambresInMemoryRepository()

        // When
        const result = chambresRepository.récupérerLesChambresAvecLaBonneCapacité(nombreDeVoyageurs);

        // Then
        expect(result).toEqual(expected_chambres);
    })
});
