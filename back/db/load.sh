FILE=users.json
if [ -f "$FILE" ]; then
  mongoimport -d courier -c users --file users.json
else
    echo "$FILE does not exist."
fi

FILE=autopark.json
if [ -f "$FILE" ]; then
  mongoimport -d courier -c autopark --file autopark.json
else
    echo "$FILE does not exist."
fi

FILE=orders.json
if [ -f "$FILE" ]; then
  mongoimport -d courier -c orders --file orders.json
else
    echo "$FILE does not exist."
fi

