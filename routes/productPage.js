import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getProductDataFromId } from "../db/read/getProductDataFromId.js";


const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/products.db");

// get index page
router.get("/", (req, res) => {

	res.redirect("/");

});


router.post("/", (req, res) => {

	const product = getProductDataFromId(dbFile, (Object.values (req.body) [0]));
	const title = "The Wormwood River";

	const carTitle = product.title;
	const carPrice = product.price;
	const carDescription = product.description;
	const carImageLink = product.imageLink;

	console.log(title);
    
	res.render("productPage", {

		product,
		title,

		carTitle,
		carPrice,
		carDescription,
		carImageLink

	});

});
// Export the router
export { router };
