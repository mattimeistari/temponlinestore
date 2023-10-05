import Database from "better-sqlite3";

// read from the database
export const getProductDataFromId = (dbFile, id) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM products WHERE id = ?;");
		const productData = stmt.get(id);
		db.close();
		return productData;
	} catch (error) {
		console.error("Error selecting users:", error.message);
		return false; // return false instead of an empty array if no user is found
	}
};