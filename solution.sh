#!/bin/bash
CODE="yOZgUk"

echo "Running tests ..."

npm test > /tmp/output.txt 2>&1

if ! grep --quiet "failed" /tmp/output.txt; then
  echo "Congratulations!"
  echo "Paste the following code in the text editor below to complete the project: $CODE"
else
  echo "The tests did not run successfully, please correct your code and submit again."
fi

rm /tmp/output.txt
