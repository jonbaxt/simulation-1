UPDATE simproducts
( name,  price, img)
VALUES
( $2, $3, $4)
WHERE id=$1;