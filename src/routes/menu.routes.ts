import { Router } from "express";
import {
  addCategory,
  addItem,
  getCategories,
  getItemsByCategory,
} from "../controllers/menu.controller";
import { authenticate } from "../middlewares/auth.middleware";
import upload from "../utils/multer";

const router = Router();

router.post(
  "/category",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  addCategory
);
import { Request, Response, NextFunction } from "express";

// ...

router.post(
  "/item",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  upload.single("image"),
  addItem
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
