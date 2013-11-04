from bs4 import BeautifulSoup
from array import *
import urllib2
import sys
url="http://www.michigantechhuskies.com/sports/mice/2013-14/teams/michigantech?view=lineup"
page=urllib2.urlopen(url)
soup = BeautifulSoup(page.read())
bio = "Player's Bio"
stats = soup.findAll('td',{'align':'center'})
count = 0
i = 0
check = 0
f = open('goalies.csv', 'w')
f.write("Jamie Phillips" + ',')
yup = 1
i = i + 1
written = 1
for eachstat in stats:
	if count > 434 and count < 474:
		if eachstat.string == "Fr" or eachstat.string == "So" or eachstat.string == "Jr" or eachstat.string == "Sr" or eachstat.string == "D" or eachstat.string == "F" or eachstat.string == "G":
			f.write(eachstat.string+ ",") 
			count = count + 1
		else:
			string = eachstat.string
			if check < 13:
				string = string.replace(' ', ',')
			if yup == 1 and check < 447:
				string = string.replace(' ', ',')
			f.write(string) 
			count = count + 1
	if count == 448:
		f.write("\n")
		f.write("Pheonix Copley" + ',')
		check = 0
		yup = 0
	if count == 461:
		f.write("\n")
		f.write("Matt Wintjes" + ',')
		check = 0		
	elif count <= 434:
		count = count + 1
	check += 1
f.close()
