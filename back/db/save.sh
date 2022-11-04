FILE=users.json
if [ -f "$FILE" ]; then
    mongoexport -d courier -c users  -o users.json
else
    echo "$FILE does not exist."
fi

FILE=autopark.json
if [ -f "$FILE" ]; then
    mongoexport -d courier -c autopark -o autopark.json
else
    echo "$FILE does not exist."
fi

FILE=orders.json
if [ -f "$FILE" ]; then
    ongoexport -d courier -c orders  -o orders.json
else
    echo "$FILE does not exist."
fi
