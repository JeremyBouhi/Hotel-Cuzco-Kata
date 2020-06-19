import * as readline from 'readline'

import { Guichet } from './domain/guichet'
import { Hotel } from './domain/hotel'
import { AfficheurRepositoryImpl } from './application/afficheur-repository-impl'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'

const chambreRepository = new ChambresInMemoryRepository()
const afficheur = new AfficheurRepositoryImpl()
const hotel = new Hotel(chambreRepository)
const guichet = new Guichet(chambreRepository)

afficheur.execute(`Bienvenue à l'Hotel Cuzco`)

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

rl.question(`
Tapez 1 si vous souhaitez voir toutes les chambres de l'hôtel
Tapez 2 si vous souhaitez voir toutes les chambres disponibles pour le(s) voyageur(s)\n`, (choix: string) => {
    switch (choix) {
        case '1':
            afficheur.execute(hotel.récupérerToutesLesChambres())
            break
        case '2':
            rl.question(`Veuillez saisir la date de check-in\n`, (checkin: string) => {
                rl.question(`Veuillez saisir la date de check-out\n`, (checkout: string) => {
                    rl.question(`Veuillez saisir le nombre de voyageurs\n`, (nombreDeVoyageurs: string) => {
                        afficheur.execute(guichet.recupereLesChambresAdequates(
                            new Date(checkin),
                            new Date(checkout),
                            parseInt(nombreDeVoyageurs)
                        ))
                    })
                })
            })
    }
})

