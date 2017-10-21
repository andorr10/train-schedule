# train-schedule
input train info and creates a schedule of when the trains will arrive.  



if fierst arrival is 5:32 and train comes every 5 min.
current time is 6:15, calculate min away and next arrival time
6:15 - 5:32 = 43 min (modular = 3)
		37,42,47,52,57,02,07,12,17
Minutes away = Frequency-Modular (5-3 = 2)
Next arrival = CurrentTime + Minutes away
