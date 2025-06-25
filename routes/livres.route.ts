import { Router } from "express";
import livreCtl from "../controllers/libres.ctl";
import { authenticate } from "../middleware/auth";

const router = Router();

router.get("/", livreCtl.getAll)
router.post("/", authenticate, livreCtl.create)
router.put("/:id", authenticate, livreCtl.update)
router.delete("/:id", authenticate, livreCtl.delete)

export default router;