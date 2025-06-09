"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getAllUsers = void 0;
const users_1 = require("../data/users");
// ✅ সব ইউজার দেখানো
const getAllUsers = (req, res) => {
    res.json(users_1.users);
};
exports.getAllUsers = getAllUsers;
// ✅ এক ইউজার দেখানো
const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const user = users_1.users.find(user => user.id === id);
    if (!user) {
        res.status(404).json({ message: "user not found" });
    }
    res.json(user);
};
exports.getUserById = getUserById;
// ✅ ইউজার আপডেট করা
const updateUser = (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    const index = users_1.users.findIndex(user => user.id === id);
    if (index === -1)
        res.status(404).json({ message: "user not found" });
    users_1.users[index] = Object.assign(Object.assign({}, users_1.users[index]), { name });
    res.json(users_1.users[index]);
};
exports.updateUser = updateUser;
