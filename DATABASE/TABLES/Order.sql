CREATE TABLE Orders (
    orderId VARCHAR(100) PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(100),
    county VARCHAR(100),
    shippingAddress VARCHAR(100)
);

CREATE TABLE OrderItems (
    orderId VARCHAR(100),
    itemId VARCHAR(100),
    itemName VARCHAR(100),
    itemDescription VARCHAR(200),
    itemPrice DECIMAL(10, 2),
    itemImages VARCHAR(500),
    PRIMARY KEY (orderId, itemId),
    FOREIGN KEY (orderId) REFERENCES Orders(orderId)
);
