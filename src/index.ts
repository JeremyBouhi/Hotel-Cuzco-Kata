import { Hotel } from './domain/hotel'
import { AfficheurRepositoryImpl } from './infrastructure/afficheur-repository-impl'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'

const chambreRepository = new ChambresInMemoryRepository();
const hotel = new Hotel(chambreRepository);
const afficheur = new AfficheurRepositoryImpl()
afficheur.execute(hotel.afficherToutesLesChambres())
