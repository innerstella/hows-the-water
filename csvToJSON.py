import csv
import json

csvfile = open('dummy.csv', 'r')
jsonfile = open('file.json', 'w')

fieldnames = ('a', 'b', 'c')
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
