import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const authenticate: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Accès non autorisé" });
    return; // assure qu'on ne passe pas à la suite
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    (req as AuthenticatedRequest).user = { id: decoded.id };
    next(); // OK on continue
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
    return;
  }
};
