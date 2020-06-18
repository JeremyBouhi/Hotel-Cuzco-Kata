import { Chambre } from '../../src/domain/chambre'
import { Réservation } from '../../src/domain/réservation'

describe('verifie que la réservation dure au moins 1 nuit', () => {
    let chambre: Chambre

    beforeEach(() => {
        chambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 1)
    })

    it('retourne true si la réservation dure au moins une nuit', () => {
        //Given
        const réservation = new Réservation(new Date(2020, 6, 18), new Date(2020, 6, 20), 1, chambre)

        // When
        const result = réservation.getAuMoinsUneNuit()

        // Then
        expect(result).toEqual(true)
    })

    it('retourne false si la réservation dure moins d\'une nuit', () => {
        //Given
        const réservation = new Réservation(new Date(2020, 6, 18), new Date(2020, 6, 18), 1, chambre)

        // When
        const result = réservation.getAuMoinsUneNuit()

        // Then
        expect(result).toEqual(false)
    })
})
