UPDATE sim1redoProducts
( name,  price, imgurl)
VALUES
( $2, $3, $4)
WHERE id=$1;