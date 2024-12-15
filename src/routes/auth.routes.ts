// src/routes/auth.routes.ts

import { Router } from "express";
import { signup, login } from "../controllers/auth.controller";
// import { validateSignup, validateLogin } from "../middlewares/validation.middleware";

const router = Router();

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", async (req, res) => {
  await login(req, res);
});

export default router;
