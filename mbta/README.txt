Nika Korchok Wakulich
lab 10
Comp 20
August 13, 2016

1. Elements correctly implemented: My geolocator is working and renders a marker with, as its icon, a green symbol that I created in the GNU manipulator for this lab. I correctly calculated the Haversine formula for the nearest Red Line Station and outputted that to the infowindow. I rendered a polyline from the geolocation to the nearest Red Line station. I added infowindows on all Red Line markers which display information for the last iteration of the parsed JSON data. Some of the infowindows work with displaying the correct scheduled times of trains, but not all of them work. Consistently about 9 stations will show their infowindows and the infowindows for the other stations will be blank. This changes on each refresh of the page.
Elements not correctly implemented: Some of the infowindows for the Red Line stations are displaying the correct information for that station, while the rest of the infoWindows are blank. As stated above, the infowindows that work/don't work changes with each refresh of the browser (potentially due to the XMLTHttpRequest getting the information in real time? Though I'm sure all stations would have information on the real-time schedule, so I don't think the XMLHttpRequest is to blame. I've worked on this for the past several days and couldn't figure it out but I'll keep at it until I do.

2. I used the following websites as guides for writing the Haversine formula, especially to use it to calculate the shortest distance from something. I referenced posts on these forums:
http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
http://stackoverflow.com/questions/4057665/google-maps-api-v3-find-nearest-markers (this was especially useful since I changed my for loop about five times until I used the method they outlined here.)

I used this website for information on how to pass back object literals from functions: http://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript

I used the redline.html file, from the WebProgramming repo on the class Github, as a template for how to approach parsing the JSON data for this problem so I am citing that as a reference.

3. I spent approximately 30 hours on this assignment.
