CREATE TABLE products (
    productId INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255) UNIQUE,
    price INTEGER NOT NULL
);

CREATE TABLE images (
    imageId INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    link VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE productImages (
    productImageId INTEGER PRIMARY KEY AUTOINCREMENT,
    productId INTEGER,
    imageId INTEGER,
    FOREIGN KEY (productId) REFERENCES products(productId),
    FOREIGN KEY (imageId) REFERENCES images(imageId)
);
