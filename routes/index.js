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

	// all images
	const whiteSakuraCivic = getImageData(dbFile, "whiteSakuraCivic");
	const bluegrayCivic = getImageData(dbFile, "bluegrayCivic");
	const supraWhite = getImageData(dbFile, "supraWhite");
	const supraRed = getImageData(dbFile, "supraRed");
	const supraBlack = getImageData(dbFile, "supraBlack");
	const supraGlossyGray = getImageData(dbFile, "supraGlossyGray");
	const transam = getImageData(dbFile, "77transam")

    
	res.render("index", {

		title,
		header,
		images,

		whiteSakuraCivic,
		bluegrayCivic,
		supraWhite,
		supraRed,
		supraBlack,
		supraGlossyGray,
		transam

	});

});

export { router };
