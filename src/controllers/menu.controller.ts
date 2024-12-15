import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Category } from "../entities/Category";
import { Item } from "../entities/Item";

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const categoryRepository = AppDataSource.getRepository(Category);

    const category = categoryRepository.create({ name });
    await categoryRepository.save(category);

    res.status(201).json({ message: "Category added successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding category" });
  }
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const { name, categoryId } = req.body;
    const imageUrl = `/uploads/${req.file?.filename}`;
    const itemRepository = AppDataSource.getRepository(Item);
    const categoryRepository = AppDataSource.getRepository(Category);

    const category = await categoryRepository.findOneBy({
      id: parseInt(categoryId),
    });
    if (!category) return res.status(404).json({ error: "Category not found" });

    const item = itemRepository.create({ name, imageUrl, category });
    await itemRepository.save(item);

    res.status(201).json({ message: "Item added successfully", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding item" });
  }
};

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories = await categoryRepository.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching categories" });
  }
};

export const getItemsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const itemRepository = AppDataSource.getRepository(Item);

    const items = await itemRepository.find({
      where: { category: { id: parseInt(categoryId) } },
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching items" });
  }
};
