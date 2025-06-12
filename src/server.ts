import app from "./app";
import { connectDb } from "./utils/db";

const port = 5000;

const startServer = async () => {
    await connectDb();

    app.listen(port, async () => {
        console.log(`server is running ${port}`);
    });
};

startServer();
