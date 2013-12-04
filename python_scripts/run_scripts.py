from apscheduler.scheduler import Scheduler
import os, logging, time
import upload_to_drive, playerStats, convert_to_excel, goalieStats, shootingStats, gspread_players


logging.basicConfig()
sched = Scheduler()

@sched.cron_schedule(day_of_week='sat', hour=3)
def scheduled_job():
  execfile("./playerStats.py")
   time.sleep(120)
   execfile("./gspread_players")

sched.start()

while True:
    pass