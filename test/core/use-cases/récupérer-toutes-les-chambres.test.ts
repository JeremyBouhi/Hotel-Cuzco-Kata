import { Chambre } from '../../../src/core/entités/chambre'
import { ChambresRepository } from '../../../src/core/port/chambres-repository'
import { RécupérerToutesLesChambres } from '../../../src/core/use-cases/récupérer-toutes-les-chambres'

describe('afficherToutesLesChambres', () => {
    it('verifie que les logs d\'affichage sont correctes', () => {
        //Given
        const premièreChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 2)
        const deuxièmeChambre = new Chambre(1, 102, '2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible', 4)
        const toutesLesChambres: Chambre[] = [premièreChambre, deuxièmeChambre]

        const chambresRepository: ChambresRepository = {
            getToutesLesChambres: jest.fn().mockReturnValue([premièreChambre, deuxièmeChambre]),
            récupérerLesChambresAvecLaBonneCapacité: jest.fn()
        }
        const récupérerToutesLesChambres = new RécupérerToutesLesChambres(chambresRepository)

        // When
        const result = récupérerToutesLesChambres.execute()

        // Then
        expect(result).toEqual(toutesLesChambres)
    })

    it('verifie l\'accord de guest suivant la capacité', () => {
        //Given
        const premièreChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 1)
        const toutesLesChambres: Chambre[] = [premièreChambre]

        const chambresRepository: ChambresRepository = {
            getToutesLesChambres: jest.fn().mockReturnValue([premièreChambre]),
            récupérerLesChambresAvecLaBonneCapacité: jest.fn()
        }
        const récupérerToutesLesChambres = new RécupérerToutesLesChambres(chambresRepository)

        // When
        const result = récupérerToutesLesChambres.execute()

        // Then
        expect(result).toEqual(toutesLesChambres)
    })
})
