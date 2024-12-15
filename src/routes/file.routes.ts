import { Router } from "express";
import { uploadFile, downloadFile } from "../controllers/file.controller";
import { authenticate } from "../middlewares/auth.middleware";
import upload from "../utils/multer";

const router = Router();

router.post(
  "/upload",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  upload.single("file"),
  uploadFile
);
router.get(
  "/download/:filename",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  downloadFile
);

export default router;
