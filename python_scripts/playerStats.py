from bs4 import BeautifulSoup
import urllib
 
urlArray = ['http://www.michigantechhuskies.com/sports/mice/2013-14/bios/anderson_patrick_nv62',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/baltus_brent_ohit',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/davis_jimmy_gskm',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/eick_cj_ya8x',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/fillion_justin_znly',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/furne_ryan_ukrw',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/gould_malcolm_639q',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/hanna_shane_60ll',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/heinonen_tyler_u40j',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/hietala_blake_po5q',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/holmberg_daniel_ujiq',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/hyland_walker_slkg',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/johnstone_david_9nah',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/johnstone_jacob_uz3i',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/kero_tanner_x25e',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/leibinger_chris_q8qw',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/neville_michael_12cd',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/petan_alex_2e96',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/pietila_blake_5iri',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/rix_dennis_qxq1',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/sova_daniel_9ncl',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/stebner_bradley_pgvn',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/sturos_reid_ygyz',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/sweeney_riley_c6fd',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/vallis_max_dqbr',
	    'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/watson_cliff_obyg']
column_array = ['Name', 'Date', 'Opponent', 'Record', '', 'Goals', 'Assists', 'Points', 'PIMS', '+/-', 'PPG', 'SHG', 'ENG', 'GWG', 'GTG', 'Shots']
f = open('test', 'w')
for header in column_array:
	if (header != 'Shots'):
		f.write(header + ',')
	else:
		f.write(header + '\n')	
for x in urlArray:
	url = x+'?view=gamelog'
	soup = BeautifulSoup(urllib.urlopen(url).read())
	 
	rows = soup.find('div', {"class":"stats-fullbox"}).find_all('tr')
	
	count = 0
	for name in soup.find_all('span',{'class':'name'}):
		count += 1
		if(count == 1):
			name = name.string
	
	f = open('test', 'a')
	i = 0
	j = 0
	data = []
	for row in rows[1:]:
	    row = row.find_all('td')
	    if row[2].text.strip() == '': # If the game has no score, we're at the last game
		break
	    line = []
	    for td in row:
		line.append(td.text.strip()) # put entries into new row
		string = line[i]
		if string.find('Oct') == -1 and string.find('Nov') == -1 and string.find('Dec') == -1:
			string = string.replace(' ', '')
		string = string.replace('\n', '')
		string = string.replace('\r', '')
		string = string.replace("at", '')
		string = string.replace('+','')
		if len(string) == 1:
			string = string.replace('-', ' ')
		if i == 0:
			f.write(name + ',')
		if i < 13:	
			f.write(string + ",")
		else:
			f.write(string)	
		i += 1
		if i == 14:
			i = 0
			f.write("\n")
	    data.append(line) # new row

