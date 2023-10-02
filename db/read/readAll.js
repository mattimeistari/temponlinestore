import Database from "better-sqlite3";

// read from the database
export const selectImages = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM images");
		const images = stmt.all();
		db.close();
		return images;
	} catch (error) {
		console.error("Error selecting images:", error.message);
		return [];
	}
};