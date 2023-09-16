import { Router } from "express";
import { db } from "../utils/db.js";
import products from '../data/products.json' assert { type: "json" };

const productRouter = Router()

try {
    await db.createCollection("products")

    const collection = db.collection("products");
    await collection.insertMany(
        products.map((product) => {
            return {
                ...product,
                created_at: Date.now(),
            };
        })
    );

    console.log("------- create 'products' collection successfully -------");
} catch (error) {
    console.log("'products' collection already exists !");
}

const collection = db.collection("products");

productRouter.get('/', async (req, res) => {
    const keywords = req.query.keywords;
    const brand = req.query.brand;
    const page = Number(req.query.page);
    const pageSize = 20;
    const skip = pageSize * (page - 1);

    const query = {}
    if (keywords) {
        query.title = new RegExp(`${keywords}`, "i");
    }
    if (keywords) {
        query.brand = brand;
    }

    const result = await collection
        .find(query)
        .skip(skip)
        .limit(pageSize)
        .toArray()

    const count = await collection.countDocuments(query);

    res.json({ data: result, totalPage: Math.ceil(count / pageSize) })
})

productRouter.get('/:productId', async (req, res) => {
    const productId = Number(req.params.productId)
    const query = { id: productId }

    const product = await collection
        .findOne(query)

    res.json({ data: product })
})

export default productRouter