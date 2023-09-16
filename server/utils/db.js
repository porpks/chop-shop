import { MongoClient } from "mongodb";
import 'dotenv/config'

// const connectionString = "mongodb+srv://spakapong:NC39tv0JpOgOFYnE@mern-workshop.chnkbsa.mongodb.net/?retryWrites=true&w=majority";

console.log("------- start connecting to MongDB -------");
export const client = new MongoClient(process.env.CONNECTDB, {
    useUnifiedTopology: true,
});

export const db = client.db("chop-shop-project");
