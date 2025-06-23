import { Livres } from './../generated/prisma/index.d';
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const livreCtl = {

    getAll: async (_req: Request, res: Response): Promise<void> => {
        try {
            const livres = await prisma.livres.findMany();
            res.status(200).json({ message: "Livres obtenus avec succès", data: livres });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur" });
        }
    },


    create: async (req: Request, res: Response): Promise<void> => {
        const { titre, auteur, description, anneePublication, ISBN } = req.body;

        if (!titre || !auteur || !description || !anneePublication || !ISBN) {
            res.status(400).json({ message: "Tous les champs sont obligatoires" });
            return;
        }

        try {
            const livre = await prisma.livres.create({
                data: {
                    livreID: `${Date.now()}`,
                    titre,
                    auteur,
                    description,
                    anneePublication: Number(anneePublication),
                    ISBN,
                },
            });
            res.status(201).json({ message: "Livre ajouté avec succès", data: livre });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur" });
        }
    },

    update: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { titre, auteur, description, anneePublication, ISBN } = req.body;

        try {
            const livres = await prisma.livres.update({
                where: { id }, 
                data: {
                    titre,
                    auteur,
                    description,
                    anneePublication: Number(anneePublication),
                    ISBN,
                }
            })
            res.status(200).json({ message: "Livre mis à jour avec succès", data: livres });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur ou ID incorrect" });
        }
    },

    delete: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            await prisma.livres.delete({ where: { id } });
            res.status(200).json({ message: "Livre supprimé avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur ou ID incorrect" });
        }
    }
}

export default livreCtl;