import { Hotel } from './domain/hotel'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'

const chambreRepository = new ChambresInMemoryRepository();
const hotel = new Hotel(chambreRepository);
console.log(hotel.afficherToutesLesChambres())
