import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectProducts } from "../db/read/readAll.js";
import { getProductData } from "../db/read/getProductData.js";


const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/products.db");

// get index page
router.get("/", (req, res) => {

	const title = "The Wormwood River";
	const subTitle = "";

	const header = "most w products ever, on zars' dead account";

	const products = selectProducts(dbFile);

    
	res.render("index", {

		title,
		header,
		products
		
	});

});

export { router };
