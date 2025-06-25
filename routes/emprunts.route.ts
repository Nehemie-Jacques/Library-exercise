/*import { Router } from "express";
import empruntCtl from "../controllers/emprunts.ctl";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post("/", authenticate, empruntCtl.createLoan)
router.put("/:id/retrun", authenticate, empruntCtl.returnLoan)
router.get("/user/:userID", authenticate, empruntCtl.getUserLoans)

export default router; */