import { Request, Response } from "express";
import { users } from "../data/users";

// ✅ সব ইউজার দেখানো
export const getAllUsers = (req: Request, res: Response) => {
    res.json(users);
};

// ✅ এক ইউজার দেখানো
export const getUserById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        res.status(404).json({ message: "user not found" });
    }
    res.json(user);
};

// ✅ ইউজার আপডেট করা
export const updateUser = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name } = req.body;

    const index = users.findIndex(user => user.id === id);
    if (index === -1) res.status(404).json({ message: "user not found" });

    users[index] = { ...users[index], name };
    res.json(users[index]);
};

export const deleteUser = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) res.status(404).json({ message: "user not found" });

    const deleteUser = users.splice(index, 1);
    res.json({ message: "user deleted", user: deleteUser[0] });
}