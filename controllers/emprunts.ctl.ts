import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../notification/mailService";

const prisma = new PrismaClient();

const empruntCtl = {

  createLoan: async (req: Request, res: Response): Promise<void> => {
    const { livreID, userID } = req.body;

    if (!livreID || !userID) {
      res.status(400).json({ message: "Tous les champs sont obligatoires" });
      return;
    }

    try {
      const livre = await prisma.livres.findUnique({ where: { id: livreID } });
      if (!livre) {
        res.status(404).json({ message: "Livre introuvable" });
        return;
      }

      const dejaEmprunte = await prisma.emprunts.findFirst({
        where: {
          livreID,
          dateRetour: null  
        }
      });

      if (dejaEmprunte) {
        res.status(400).json({ message: "Ce livre est déjà emprunté" });
        return;
      }

      const emprunt = await prisma.emprunts.create({
        data: {
          empruntID: `${Date.now()}`, 
          livreID,
          userID,
          dateEmprunt: new Date(),
          dateRetour: null 
        }
      });

      res.status(201).json({ message: "Emprunt ajouté avec succès", data: emprunt });
    } catch (error) {
      console.error("Erreur createLoan:", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  returnLoan: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const emprunt = await prisma.emprunts.findUnique({ where: { empruntID: id } });

      if (!emprunt || emprunt.dateRetour !== null) {
        res.status(404).json({ message: "Emprunt introuvable ou déjà retourné" });
        return;
      }

      const retour = await prisma.emprunts.update({
        where: { empruntID: id },
        data: {
          dateRetour: new Date()
        }
      });

      const user = await prisma.user.findUnique({ where: { id: emprunt.userID } });

      if (user) {
        await sendEmail(
          user.email,
          "Livre maintenant disponible",
          `Le livre que vous avez emprunté (${emprunt.livreID}) est maintenant disponible`
        );

        await prisma.notifications.create({
          data: {
            notificationID: `${Date.now()}`,
            userID: user.id,
            livreID: emprunt.livreID,
            message: `Le livre ${emprunt.livreID} est maintenant disponible`
          }
        });
      }

      res.status(200).json({ message: "Emprunt retourné avec succès", data: retour });
    } catch (error) {
      console.error("Erreur returnLoan:", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  getUserLoans: async (req: Request, res: Response): Promise<void> => {
    const { userID } = req.params;

    try {
      const historique = await prisma.emprunts.findMany({
        where: { userID },
        orderBy: { dateEmprunt: "desc" }
      });

      res.status(200).json({ message: "Historique obtenu avec succès", data: historique });
    } catch (error) {
      console.error("Erreur getUserLoans:", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }

};

export default empruntCtl;
