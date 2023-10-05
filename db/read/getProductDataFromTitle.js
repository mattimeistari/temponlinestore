import Database from "better-sqlite3";

// read from the database
export const getProductDataFromTitle = (dbFile, title) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM products WHERE title = ?;");
		const productData = stmt.get(title);
		db.close();
		return productData;
	} catch (error) {
		console.error("Error selecting users:", error.message);
		return false; // return false instead of an empty array if no user is found
	}
};