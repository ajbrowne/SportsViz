import csv, xlwt

files = ['scoring_totals.csv','goalie_totals.csv','anderson_games.csv']

for i in files:
    f=open(i, 'rb')
    g = csv.reader ((f), delimiter=",")
    wbk= xlwt.Workbook()
    sheet = wbk.add_sheet("Sheet 1")

    for rowi, row in enumerate(g):
        for coli, value in enumerate(row):
            sheet.write(rowi,coli,value)

    wbk.save(i + '.xls')