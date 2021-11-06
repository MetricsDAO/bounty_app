#!/bin/bash
# sql_to_csv.sh

CONN="psql -U my_user -d my_db"
QUERY="$(sed 's/;//g;/^--/ d;s/--.*//g;' $1 | tr '\n' ' ')"
echo "$QUERY"

echo "\\copy ($QUERY) to '$2' with csv header" | $CONN > /dev/null