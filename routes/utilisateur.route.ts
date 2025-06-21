import { Router } from "express";
import utilisateurCtl from "../controllers/utilisateur.ctl";
import { authenticate } from "../middleware/auth"

const router = Router();

router.post(".signup", utilisateurCtl.signup);
router.post(".login", utilisateurCtl.login);
router.get("/profile", authenticate, utilisateurCtl.getProfile);
router.put("/profile", authenticate, utilisateurCtl.updateProfile);
router.delete("/profile", authenticate, utilisateurCtl.deleteProfile);

export default router;