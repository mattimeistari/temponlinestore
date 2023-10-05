import Database from "better-sqlite3";

// Add image data to the database
export const createProduct = (dbFile, title, link, description) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("INSERT INTO images(title, link, description) VALUES (?, ?, ?)");
	stmt.run(title, link, description);
	db.close();
	return true;
};