import * as readline from 'readline'
import { Réservation } from './core/entités/réservation'

import { AfficheurRepositoryImpl } from './application/afficheur-repository-impl'
import { PasserUneRéservation } from './core/use-cases/passer-une-réservation'
import { RécupererLesChambresDisponibles } from './core/use-cases/récupérer-les-chambres-disponibles'
import { RécupérerToutesLesChambres } from './core/use-cases/récupérer-toutes-les-chambres'
import { ChambresInMemoryRepository } from './infrastructure/chambres-in-memory-repository'
import { RéservationRepositoryImpl } from './infrastructure/réservation-repository-impl'

const chambreRepository = new ChambresInMemoryRepository()
const afficheur = new AfficheurRepositoryImpl()
const réservationRepository = new RéservationRepositoryImpl()

const récupérerToutesLesChambres = new RécupérerToutesLesChambres(chambreRepository)
const récupérerLesChambresDisponibles = new RécupererLesChambresDisponibles(chambreRepository)
const passerUneRéservation = new PasserUneRéservation(réservationRepository)

afficheur.execute(`Bienvenue à l'Hotel Cuzco`)

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

rl.question(`
Tapez 1 si vous souhaitez voir toutes les chambres de l'hôtel
Tapez 2 si vous souhaitez voir toutes les chambres disponibles pour le(s) voyageur(s)\n`, (choix: string) => {
    switch (choix) {
        case '1':
            afficheur.execute(récupérerToutesLesChambres.execute())
            break
        case '2':
            rl.question(`Veuillez saisir la date de check-in\n`, (cIn: string) => {
                rl.question(`Veuillez saisir la date de check-out\n`, (cOut: string) => {
                    rl.question(`Veuillez saisir le nombre de voyageurs\n`, (nbDeVoyageurs: string) => {
                        const nombreDeVoyageurs = parseInt(nbDeVoyageurs)
                        const checkIn = new Date(cIn)
                        const checkOut = new Date(cOut)
                        afficheur.execute(récupérerLesChambresDisponibles.execute(nombreDeVoyageurs))
                        rl.question(`Choisissez un numéro de chambre\n`, (numeroChambre: string) => {
                            const réservation = new Réservation(checkIn, checkOut, nombreDeVoyageurs, parseInt(numeroChambre))
                            passerUneRéservation.execute(réservation)
                        })
                    })
                })
            })
    }
})

