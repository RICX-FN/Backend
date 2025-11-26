import { Router } from "express";
import { userController } from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { userSchema } from "../schemas/userSchema";

const router = Router();

router.post("/", validate(userSchema), userController.create);
router.get("/", userController.list);
router.get("/:id", userController.get);
router.put("/:id", validate(userSchema), userController.update);
router.delete("/:id", userController.delete);

export default router;
