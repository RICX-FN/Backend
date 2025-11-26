import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

//Routes for Users
router.get("/", userController.list);
router.post("/", userController.create);
router.get("/:id", userController.find);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
