import { Hotel } from './domain/hotel'
import { AfficheurRepositoryImpl } from './application/afficheur-repository-impl'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'

const chambreRepository = new ChambresInMemoryRepository();
const afficheur = new AfficheurRepositoryImpl()
const hotel = new Hotel(chambreRepository);
afficheur.execute(hotel.afficherToutesLesChambres())
