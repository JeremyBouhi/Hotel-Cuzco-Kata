import { Chambre } from '../../src/domain/chambre'
import { Hotel } from '../../src/domain/hotel'

describe('afficherToutesLesChambres', ()=> {
    it("verifie que les logs d'affichage sont correctes", () => {
        const affichageDeToutesLesChambres = `| Etage | Chambre | Description | Capacité |
                                                       |:-----:|:----:|---------------------------------------------------------------------------------------------------------------|:--------------:|
                                                       | 1 | 101 | 1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible | 2 guests |
                                                       | 1 | 102 | 2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible | 4 guests |
                                                       | 1 | 103 | 3 single beds - A/C - Wi-Fi - private bathroom - wheelchair accessible | 3 guests |
                                                       | 2 | 201 | 1 king size bed - A/C - Wi-Fi - private bathroom | 2 guests |
                                                       | 2 | 202 | 1 queen size bed - Wi-Fi - private bathroom | 2 guests |
                                                       | 2 | 203 | 1 king size bed + 3 single beds - A/C - Wi-Fi - private bathroom | 5 guests |
                                                       | 2 | 204 | 1 single bed - Wi-Fi - shared bathroom | 1 guest |
                                                       | 2 | 205 | 2 single beds - A/C - Wi-Fi - shared bathroom | 2 guests |
                                                       | 3 | 301 | 1 queen size bed - A/C - private bathroom | 2 guests |
                                                       | 3 | 302 | 2 single beds - A/C - private bathroom | 2 guests |
                                                       | 3 | 303 | 3 single beds - A/C - shared bathroom | 3 guests |
                                                       | 3 | 304 | 2 single beds - shared bathroom | 2 guests |`;

        const premiereChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 2)
        const deuxièmeChambre = new Chambre(1, 102, '2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible', 4)
        const hotel: Hotel = new Hotel([premiereChambre, deuxièmeChambre]);

      const result = hotel.afficherToutesLesChambres();

      expect(result).toEqual(affichageDeToutesLesChambres)
    });
});
