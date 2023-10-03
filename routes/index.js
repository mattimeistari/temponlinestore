import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectImages } from "../db/read/readAll.js";
import { getImageData } from "../db/read/getImageData.js";


const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/images.db");

// get index page
router.get("/", (req, res) => {

	const title = "💀💀💀";

	const header = "most w images ever, on zars' dead account";

	const images = selectImages(dbFile);

    
	res.render("index", {

		title,
		header,
		images
		
	});

});

export { router };
