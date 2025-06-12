"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const db_1 = require("../utils/db");
const mongodb_1 = require("mongodb");
// ✅ সব ইউজার দেখানো
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, db_1.getDb)().collection("users").find().toArray();
    return res.json(users);
});
exports.getAllUsers = getAllUsers;
// ✅ এক ইউজার দেখানো
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, db_1.getDb)().collection("users").findOne({ _id: new mongodb_1.ObjectId(id) });
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.json(user);
});
exports.getUserById = getUserById;
// ✅ ইউজার তৈরি করা
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const result = yield (0, db_1.getDb)().collection("users").insertOne({ name });
    return res.status(201).json({ message: "User created", id: result.insertedId });
});
exports.createUser = createUser;
// ✅ ইউজার আপডেট করা
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name } = req.body;
    const result = yield (0, db_1.getDb)().collection("users").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name } });
    if (result.matchedCount === 0)
        res.status(404).json({ message: "user not found" });
    return res.json({ message: "user updated" });
});
exports.updateUser = updateUser;
// ✅ ইউজার ডিলিট করা
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, db_1.getDb)().collection("users").deleteOne({ _id: new mongodb_1.ObjectId(id) });
    if (result.deletedCount === 0)
        res.status(404).json({ message: "user not found" });
    return res.json({ message: "user deleted" });
});
exports.deleteUser = deleteUser;
