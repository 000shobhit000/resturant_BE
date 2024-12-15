import { Router } from "express";
import {
  addCategory,
  addItem,
  getCategories,
  getItemsByCategory,
} from "../controllers/menu.controller";
import { authenticate } from "../middlewares/auth.middleware";
import upload from "../utils/multer";
import { Request, Response, NextFunction } from "express";

const router = Router();

router.post(
  "/category",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  addCategory
);

// ...

router.post(
  "/item",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  upload.single("image"),
  async (req, res) => {
    await addItem(req, res);
  }
);
router.get(
  "/categories",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  getCategories
);
router.get(
  "/items/:categoryId",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  getItemsByCategory
);

export default router;
