import Database from "better-sqlite3";

// delete.js
export const deleteImages = (dbFile, idUser) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("DELETE FROM image WHERE id = ?");
	stmt.run(idUser);
	db.close();
	return true;
};