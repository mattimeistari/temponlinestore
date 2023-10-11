import Database from "better-sqlite3";

// read from the database
export const selectProducts = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT products.*, images.link \
		FROM products \
		INNER JOIN productImages \
		ON products.productId = productImages.productId \
		INNER JOIN images ON \
		productImages.imageId = images.imageId;");
		
		const products = stmt.all();
		db.close();
		return products;
	} catch (error) {
		console.error("Error selecting products:", error.message);
		return [];
	}
};