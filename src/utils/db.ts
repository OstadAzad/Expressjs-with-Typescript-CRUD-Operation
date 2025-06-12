import { MongoClient } from "mongodb";


const uri = "mongodb+srv://mongodb:mongodb@cluster0.q4bfyf2.mongodb.net/usersdb?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let db: any;

export const connectDb = async () => {
        await client.connect();
        db = client.db("usersdb"); //database name
        console.log("MongoDB connected");
};

export const getDb = () => db;