import csv, xlwt, gspread

# Login with Google account
gc = gspread.login('sviztsp@gmail.com', 'vizvizviz')
sh = gc.open('test')
files = ['test']
ws = sh.get_worksheet(0) # fetch old sheet
worksheet = sh.add_worksheet(title="Sheet1", rows="1000", cols="16") # add new sheet
sh.del_worksheet(ws)
wks = sh.get_worksheet(0) # get new first worksheet

letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
for i in files:
	f=open(i, 'rb')
	wks = gc.open(i).sheet1
	g = csv.reader ((f), delimiter=",")
	iterate = 0
	row_check = 1
	# Iterates thorugh csv file populating the google spreadsheet appropriately
	for rowi, row in enumerate(g):
		for coli, value in enumerate(row):
			# Gets row/column combo
			add = letters[iterate]
			insert = add
			insert += str(row_check)
			# Iterates through a row
			if letters[iterate] != 'P':
				wks.update_acell(insert, value)
				iterate+=1
			# Moves to new row
			else:
				wks.update_acell(insert, value)
				iterate = 0
				row_check+=1


