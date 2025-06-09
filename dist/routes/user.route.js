"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", user_controller_1.getAllUsers);
userRoutes.get("/:id", user_controller_1.getUserById);
userRoutes.put("/:id", user_controller_1.updateUser);
exports.default = userRoutes;
