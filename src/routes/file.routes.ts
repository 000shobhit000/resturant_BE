import { Router } from "express";
import { uploadFile, downloadFile } from "../controllers/file.controller";
import { authenticate } from "../middlewares/auth.middleware";
import upload from "../utils/multer";

const router = Router();

router.post("/upload", authenticate, upload.single("file"), uploadFile);
router.get("/download/:filename", authenticate, downloadFile);

export default router;
