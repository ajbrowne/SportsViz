from bs4 import BeautifulSoup
import urllib
 
url = 'http://www.michigantechhuskies.com/sports/mice/2013-14/bios/anderson_patrick_nv62?view=gamelog'
soup = BeautifulSoup(urllib.urlopen(url).read())
 
rows = soup.find('div', {"class":"stats-fullbox"}).find_all('tr')

count = 0
for name in soup.find_all('span',{'class':'name'}):
	count += 1
	if(count == 1):
		name = name.string

f = open('anderson_games.csv', 'w')
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
        string = line[i].replace(' ', '')
        string = string.replace('\n', '')
        string = string.replace('\r', '')
        string = string.replace("at", '')
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

