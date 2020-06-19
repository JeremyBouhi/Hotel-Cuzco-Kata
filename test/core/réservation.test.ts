import { Réservation } from '../../src/core/entités/réservation'

describe('verifie que la réservation dure au moins 1 nuit', () => {
    it('retourne true si la réservation dure au moins une nuit', () => {
        //Given
        const réservation = new Réservation(new Date(2020, 6, 18), new Date(2020, 6, 20), 1, 101)

        // When
        const result = réservation.checkAuMoinsUneNuit()

        // Then
        expect(result).toEqual(true)
    })

    it('retourne false si la réservation dure moins d\'une nuit', () => {
        //Given
        const réservation = new Réservation(new Date(2020, 6, 18), new Date(2020, 6, 18), 1, 101)

        // When
        const result = réservation.checkAuMoinsUneNuit()

        // Then
        expect(result).toEqual(false)
    })
})
