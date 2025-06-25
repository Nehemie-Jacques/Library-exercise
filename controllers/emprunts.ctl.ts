/*import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../notification/mailService";

const prisma = new PrismaClient();

const empruntCtl = {

    createLoan: async (req: Request, res: Response) => {
        const { livreID, utilisateurID } = req.body;

        if (!livreID || !utilisateurID) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires" });
        }

        try {
            const livre = await prisma.livres.findUnique({ where: { id: livreID } });
            if (!livre) return res.status(404).json({ message: "Livre introuvable" });

            const dejaEmprunte = await prisma.emprunts.findFirst({
                where: {
                    livreID,
                    dateRetour: undefined
                }
            })

            if (dejaEmprunte) return res.status(400).json({ message: "Ce livre est deja emprunte" });

            const emprunt = await prisma.emprunts.create({
                data: {
                    livreID,
                    userID: utilisateurID,
                    empruntID: `${Date.now()}`,
                    dateEmprunt: new Date(),
                    dateRetour: null,
                }
            })

            return res.status(201).json({ message: "Emprunt ajouté avec succès", data: emprunt });
        } catch (error) {
            return res.status(500).json({ message: "Erreur serveur" });
        }
    },

    returnLoan: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const emprunt = await prisma.emprunts.findUnique({ where: { empruntID: id } });

            if (!emprunt || emprunt.dateRetour !== null) return res.status(404).json({ message: "Emprunt introuvable" });

            const retour = await prisma.emprunts.update({
                where: { empruntID: id },
                data: {
                    dateRetour: new Date()
                }
            })

            const user = await prisma.user.findUnique({ where: { id: emprunt.userID } })

            if (user) {
                await sendEmail(
                    user.email,
                    "Livre maintenant disponible",
                    `Le livre que vous avez emprunté (${emprunt.livreID}) est maintenant disponible`
                )

                await prisma.notifications.create({
                    data: {
                        notificationID: `${Date.now()}`,
                        userID: user.id,
                        livreID: emprunt.livreID,
                        message: `Le livre ${emprunt.livreID} est maintenant disponible`
                    }
                })
            }
    
            return res.status(200).json({ message: "Emprunt retourné avec succès", data: retour });
        } catch (error) {
            return res.status(500).json({ message: "Erreur serveur" });
        }
    },

    getUserLoans: async (req: Request, res: Response) => {
        const { userID } = req.params;

        try {
            const historique = await prisma.emprunts.findMany({
                where: { userID },
                orderBy: { dateEmprunt: "desc" }
            })

            return res.status(200).json({ message: "Historique obtenu avec succès", data: historique });
        } catch (error) {
            return res.status(500).json({ message: "Erreur serveur" });
        }
    }
}

export default empruntCtl*/