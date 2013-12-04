from bs4 import BeautifulSoup
from array import *
import urllib2
import sys
url="http://www.michigantechhuskies.com/sports/mice/2013-14/teams/michigantech?view=lineup"
nameurl = "http://www.michigantechhuskies.com/sports/mice/2013-14/roster?sort=number"
page=urllib2.urlopen(url)
namepage = urllib2.urlopen(nameurl)
soup = BeautifulSoup(page.read())
namesoup = BeautifulSoup(namepage.read())
bio = "Player's Bio"
stats = soup.findAll('td',{'align':'center'})
names = namesoup.findAll('a',{'title':bio})
count = 0
initial = 0
i = 0
check = 0
wait = 0
string = ''
namearray = [0] * 100
f = open('scoring_totals', 'w')
for eachname in names:
	namearray[i] = eachname
	i = i + 1	
i = 0
f.write(namearray[i].string+ ",")
i = i + 1
written = 1
for eachstat in stats:
	if count < 15 and initial > 4:
		if eachstat.string == "Fr" or eachstat.string == "So" or eachstat.string == "Jr" or eachstat.string == "Sr" or eachstat.string == "D" or eachstat.string == "F" or eachstat.string == "G":
			f.write(eachstat.string+ ",") 
			count = count + 1
			if wait == 1:
				check = check + 1
		else:
			if wait == 0:
				string = eachstat.string
				if count == 13:
					string = string.replace(' ', '')
				else:
					string = string.replace(' ', ',')
				string = string.replace('+','')
				f.write(string) 
				count = count + 1
			else:
				if check < 14 or check > 40:
					string = eachstat.string
					if count == 13:
						string = string.replace(' ', '')
					else:
						string = string.replace(' ', ',')
					string = string.replace('+','')
					f.write(string)
					count = count + 1
					check = check + 1
					if check == 27:
						wait = 0	
				else:
					check = check + 1
					count = count + 1		
	if count == 14 and wait == 0:
		f.write("\n")
		if written < 29:
			f.write(namearray[i].string + ",")
			if namearray[i].string == "Matt Wintjes":
				wait = 1
			i = i + 1
		count = 0
		written = written + 1
	elif count == 27 and wait == 1:
		f.write("\n")
		count = 0	
	else:
		initial = initial + 1
f.close()
