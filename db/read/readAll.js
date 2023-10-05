import Database from "better-sqlite3";

// read from the database
export const selectProducts = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM products");
		const products = stmt.all();
		db.close();
		return products;
	} catch (error) {
		console.error("Error selecting products:", error.message);
		return [];
	}
};