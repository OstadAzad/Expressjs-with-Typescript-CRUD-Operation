import { Request, Response } from "express";
import { users } from "../data/users";
import { getDb } from "../utils/db";
import { ObjectId } from "mongodb";

// ✅ সব ইউজার দেখানো
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await getDb().collection("users").find().toArray();
    return res.json(users);
};

// ✅ এক ইউজার দেখানো
export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await getDb().collection("users").findOne({ _id: new ObjectId(id) });
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.json(user);
};

// ✅ ইউজার তৈরি করা
export const createUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await getDb().collection("users").insertOne({ name });
    return res.status(201).json({ message: "User created", id: result.insertedId });
};

// ✅ ইউজার আপডেট করা
export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id
    const { name } = req.body;

    const result = await getDb().collection("users").updateOne(
        { _id: new ObjectId(id) },
        { $set: { name } }
    );

    if (result.matchedCount === 0) res.status(404).json({ message: "user not found" });
    return res.json({ message: "user updated" });
};

// ✅ ইউজার ডিলিট করা
export const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getDb().collection("users").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) res.status(404).json({ message: "user not found" });

    return res.json({ message: "user deleted" });
};