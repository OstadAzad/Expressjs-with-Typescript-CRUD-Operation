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
exports.getDb = exports.connectDb = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://mongodb:mongodb@cluster0.q4bfyf2.mongodb.net/usersdb?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri);
let db;
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    db = client.db("usersdb"); //database name
    console.log("MongoDB connected");
});
exports.connectDb = connectDb;
const getDb = () => db;
exports.getDb = getDb;
