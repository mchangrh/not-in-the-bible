#/bin/bash
# by https://unix.stackexchange.com/a/317951

python <(cat <<EOSCRIPT
import sys
import csv
f = csv.reader(open(sys.argv[1]))
for row in f:
  print row[-1]
EOSCRIPT
) input.csv > output.csv 