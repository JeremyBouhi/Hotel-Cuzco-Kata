import { Hotel } from './domain/hotel'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'

const chambreRepository = new ChambreInMemoryRepository();
const hotel = new Hotel(chambreRepository);
console.log(hotel.afficherToutesLesChambres())