-- Create the CART table
CREATE TABLE CART (
  product_id VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(18, 2) NOT NULL,
  CONSTRAINT PK_CART PRIMARY KEY (product_id)
);

-- Create a unique index on product_id to prevent duplicates
CREATE UNIQUE INDEX UX_PRODUCT_ID ON CART (product_id);


