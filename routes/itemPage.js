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
	const title = product.title;
	const header = "temp";
	const description = product.description;
	const link = product.imageLink;

	console.log(product);
    
	res.render("productMain", {
		title,
		header,
		product,
		description,
		link
	});

});
// Export the router
export { router };
