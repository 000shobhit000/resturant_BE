import { Request, Response } from "express";
import path from "path";

export const uploadFile = (req: Request, res: Response) => {
  try {
    const filePath = `/uploads/${req.file?.filename}`;
    res.status(201).json({ message: "File uploaded successfully", filePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "File upload failed" });
  }
};

export const downloadFile = (req: Request, res: Response) => {
  const { filename } = req.params;
  const fileLocation = path.join(__dirname, "../../uploads", filename);
  res.download(fileLocation, (err) => {
    console.error(err);
    if (err) res.status(500).json({ error: "File download failed" });
  });
};
