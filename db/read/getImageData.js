import Database from "better-sqlite3";

// read from the database
export const getImageData = (dbFile, title) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM images WHERE title = ?;");
		const imageData = stmt.get(title);
		db.close();
		return imageData;
	} catch (error) {
		console.error("Error selecting users:", error.message);
		return null; // return null instead of an empty array if no user is found
	}
};