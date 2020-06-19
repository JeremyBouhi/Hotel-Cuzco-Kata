import { ChambresRepository } from '../../../src/core/port/chambres-repository'
import { RécupererLesChambresDisponibles } from '../../../src/core/use-cases/récupérer-les-chambres-disponibles'

describe('recupereLesChambresAdequates', () => {
    it('vérifie que chambres-repository est appelé avec les bons paramètres', () => {
        // Given
        const nombredeVoyageurs = 4
        const chambresRepository: ChambresRepository = {
            récupérerLesChambresAvecLaBonneCapacité: jest.fn(),
            getToutesLesChambres: jest.fn()
        }
        const récupérerLesChambresDisponibles = new RécupererLesChambresDisponibles(chambresRepository)

        // When
        récupérerLesChambresDisponibles.execute(nombredeVoyageurs);

        // Then
        expect(chambresRepository.récupérerLesChambresAvecLaBonneCapacité).toHaveBeenCalledWith(nombredeVoyageurs)
    })
});
