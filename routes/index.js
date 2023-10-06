import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectProducts } from "../db/read/readAll.js";


const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/products.db");

// get index page
router.get("/", (req, res) => {

	const title = "The Wormwood River";
	const subTitle = "Juiced Marketplace";

	const header = "https://cooltext.com/";

	const products = selectProducts(dbFile);

    
	res.render("index", {

		title,
		subTitle,
		header,
		products
		
	});

});

export { router };
