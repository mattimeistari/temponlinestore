import Database from "better-sqlite3";

// delete.js
export const deleteProducts = (dbFile, idUser) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("DELETE FROM products WHERE id = ?");
	stmt.run(idUser);
	db.close();
	return true;
};