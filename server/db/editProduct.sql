UPDATE sim1redoproducts
SET name=$2,
    price=$3,
    imgurl=$4
WHERE id=$1;

SELECT * FROM sim1redoProducts ORDER BY id ASC;