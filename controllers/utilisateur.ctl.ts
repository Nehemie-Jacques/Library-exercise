import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { AuthenticatedRequest } from "../middleware/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const utilisateurCtl = {

  signup: async (req: Request, res: Response): Promise<void> => {
    const { name, email, password, userID } = req.body;

    if (!name || !email || !password || !userID) {
      res.status(400).json({ message: "Tous les champs sont obligatoires" });
      return;
    }

    try {
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        res.status(400).json({ message: "Utilisateur déjà existant" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          userID,
        },
      });

      res.status(201).json({ message: "Utilisateur créé avec succès", data: user });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  login: async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Tous les champs sont obligatoires" });
      return;
    }

    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        res.status(400).json({ message: "Email ou mot de passe incorrect" });
        return;
      }

      const verify = await bcrypt.compare(password, user.password);
      if (!verify) {
        res.status(400).json({ message: "Email ou mot de passe incorrect" });
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
      res.status(200).json({ message: "Connexion réussie", data: user, token });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  getProfile: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.user?.id;
    try {
      const profile = await prisma.user.findUnique({ where: { id: userId } });
      res.status(200).json({ message: "Profil récupéré avec succès", data: profile });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  updateProfile: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, email, password, userID } = req.body;

    if (!id) {
      res.status(400).json({ message: "ID manquant" });
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const update = await prisma.user.update({
        where: { id },
        data: {
          name,
          email,
          password: hashedPassword,
          userID,
        },
      });

      res.status(200).json({ message: "Profil mis à jour avec succès", data: update });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  deleteProfile: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await prisma.user.delete({ where: { id } });
      res.status(200).json({ message: "Profil supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
};

export default utilisateurCtl;
