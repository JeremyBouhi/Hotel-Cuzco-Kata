import { Chambre } from '../../src/domain/chambre'
import { Hotel } from '../../src/domain/hotel'

describe('afficherToutesLesChambres', ()=> {
    it("verifie que les logs d'affichage sont correctes", () => {
        const affichageDeToutesLesChambres:string[] = [`| Etage | Chambre | Description | Capacité |`,
                                                       `|:-----:|:----:|---------------------------------------------------------------------------------------------------------------|:--------------:|`,
                                                       `| 1 | 101 | 1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible | 2 guests |`,
                                                       `| 1 | 102 | 2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible | 4 guests |`];


        const premiereChambre = new Chambre(1, 101, '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible', 2)
        const deuxièmeChambre = new Chambre(1, 102, '2 queen size beds - A/C - Wi-Fi - private bathroom - wheelchair accessible', 4)
        const hotel: Hotel = new Hotel([premiereChambre, deuxièmeChambre]);

      const result = hotel.afficherToutesLesChambres();

      expect(result).toEqual(affichageDeToutesLesChambres)
    });
});
