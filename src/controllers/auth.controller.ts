import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    await userRepository.save(user);
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", data: undefined });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ message: "Login successful", token: token, data: undefined });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};
