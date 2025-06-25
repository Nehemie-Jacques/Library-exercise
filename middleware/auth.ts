import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

const prisma = new PrismaClient();

export const authenticate: RequestHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void>  => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Accès non autorisé" });
    return; 
  }

  const token = authHeader.split(" ")[1];

  try {
    const blacklisted = await prisma.tokenBlacklist.findUnique({ where: { token } });

    if (blacklisted) {
      res.status(401).json({ message: "Token expiré ou invalide (déconnecté)" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    (req as AuthenticatedRequest).user = { id: decoded.id };
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
    return;
  }
};
