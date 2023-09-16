import express from "express";
import bodyParser from "body-parser";
import productRouter from "./apps/product.js";
import { client } from "./utils/db.js";

async function init() {
    const app = express();
    const port = 3000

    await client.connect();
    console.log("------- connecting to MongoDB successfully -------");

    app.use(bodyParser.json());
    app.use('/product', productRouter)

    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    app.get('*', (req, res) => {
        res.status(404).send("Not found");
    })

    app.listen(port, () => {
        console.log(`server is runnig on port ${port}`)
    })
}

init()