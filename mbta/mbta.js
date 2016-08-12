var request = new XMLHttpRequest();
var map;
var marker;
var infoWindow = new google.maps.InfoWindow();

var redLineCenter = new google.maps.LatLng(42.352271, -71.05524200000001);

var redLineAlewifeToJFK = [
        {stationName: 'Alewife', lat: 42.395428, lng: -71.142483},
        {stationName:'Davis', lat:42.39674, lng:-71.121815},
        {stationName:'Porter Square', lat:42.3884,  lng:-71.11914899999999},
        {stationName:'Harvard Square', lat: 42.373362, lng:-71.118956},
        {stationName:'Central Square', lat:42.365486, lng:-71.103802},
        {stationName:'Kendall/MIT', lat:42.36249079, lng:-71.08617653},
        {stationName:'Charles/MGH', lat:42.361166, lng:-71.070628},
        {stationName:'Park Street', lat:42.35639457, lng:-71.0624242},
        {stationName:'Downtown Crossing', lat:42.355518, lng:-71.060225},
        {stationName:'South Station', lat:42.352271, lng:-71.05524200000001},
        {stationName:'Broadway', lat:42.342622, lng: -71.056967},
        {stationName: 'Andrew', lat:42.330154, lng:-71.057655},
        {stationName:'JFK/UMass',  lat:42.320685, lng:-71.052391}
    ];

    
var redLineJFKToBraintree = [
        {stationName:'JFK_UMass', lat:42.320685, lng:-71.052391},
        {stationName:'North Quincy', lat:42.275275, lng:-71.029583},
        {stationName:'Wollaston', lat:42.2665139, lng:-71.0203369},
        {stationName:'Quincy Center', lat:42.251809, lng:-71.005409},
        {stationName:'Quincy Adams', lat:42.233391,lng:-71.007153},
        {stationName:'Braintree', lat:42.2078543, lng:-71.0011385}
];

    
var redLineJFKToAshmont = [
        {stationName:'JFK_UMass', lat:42.320685, lng:-71.052391},
        {stationName:'Savin Hill', lat:42.31129, lng:-71.053331},
        {stationName:'Fields Corner', lat:42.300093, lng:-71.061667},
        {stationName:'Shawmut', lat:42.29312583, lng:-71.06573796000001},
        {stationName:'Ashmont', lat:42.284652, lng:-71.06448899999999}
];
    
var redLineStations = redLineAlewifeToJFK.concat(redLineJFKToBraintree, redLineJFKToAshmont);


var myOptions = {
    center:redLineCenter,
    zoom: 7,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};

/*
request = new XMLHttpRequest();
request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json",true);
request.onreadystatechange = schedule;
request.send(null);
function schedule(){
    if(request.readyState == 4 && request.status == 200){
        var contentStringStations = [];
        //raw = request.responseText;
        var redLineData = JSON.parse(request.responseText);
        for (i=0; i < redLineData.TripList.Trips.length; i++){
            contentStringStations[i] = '<div id = "content">' + '<h2 id="firstHeading"> Red Line Schedule for</h1>' + redLineData.TripList.Trips[i].Predictions[0].Stop + ", " + redLineData.TripList.Trips[i].Destination +  " bound, will arrive in " + redLineData.TripList.Trips[i].Predictions[0].Seconds + " seconds" + '</div>';
        
        console.log(contentStringStations[i]);
        return contentStringStations[i];
        //console.log(contentStringStations);
        document.getElementById("list").innerHTML = contentStringStations;
        //return contentStringStations;
        }
    } else if (request.readyState == 4 && request.status != 200) {
        document.getElementById("list").innerHTML = "<p> Oh no, your browser doesn't support this feature. </p> "
    }
}
*/

function createSchedule(stationName){
}    


function init(){
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var image = "redline.png";

    var redCenterMarker = new google.maps.Marker({
        position: redLineCenter,
        map: map,
        icon: image,
        title: "South Station"
    });
    redCenterMarker.setMap(map);
    var markers = [];
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    //var contentStrings = [];
    //var contentString = schedule();
    for(var i =0; i<redLineStations.length; i++){
        var position = new google.maps.LatLng(redLineStations[i].lat, redLineStations[i].lng);
        var title = redLineStations[i].stationName;
        markers[i] = new google.maps.Marker({
                position: position,
                map: map,
                icon: image,
                title: title
        });
        //contentStrings[i] = schedule();
        //infoWindow = new google.maps.InfoWindow({
            //content: contentStrings[i]
        //});
        //var contentString = schedule();
        //var infoWindow = new google.maps.InfoWindow({
              //  content: contentString
        //});
        google.maps.event.addListener(markers[i],'click', function(marker, content, infoWindow){
            return function() {    
                request = new XMLHttpRequest();
                request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json",true);
                request.onreadystatechange = schedule;
                request.send(null);
                function schedule(){
                    if(request.readyState == 4 && request.status == 200){
                        contentStringStations = "";
                    //raw = request.responseText;
                        redLineData = JSON.parse(request.responseText);
                        for (j=0; i < redLineData.TripList.Trips.length; i++){
                            if (redLineData.TripList.Trips[i].Predictions[j].Stop == this.getTitle()) 
                            {
                                contentStringStations += '<div id = "content">' + '<h2 id="firstHeading"> Red Line Schedule for</h1>' + redLineData.TripList.Trips[j].Predictions[j].Stop + ", " + redLineData.TripList.Trips[i].Destination +  " bound, will arrive in " + redLineData.TripList.Trips[i].Predictions[j].Seconds + " seconds" + '</div>';
                                content = contentStringStations;
                                //console.log(content);
                            }
                         } infoWindow.setContent(this.content);
                           console.log(this.content);
                    } else if (request.readyState == 4 && request.status != 200) {
                        document.getElementById("list").innerHTML = "<p> Oh no, your browser doesn't support this feature. </p> "
                    }
                }; infoWindow.open(map,markers[i]);
                // infoWindow.setContent(contentString);
            };(i)
            //infoWindows.push(infoWindow);
            markers.push(marker);
        });
    
    }
        /*
        google.maps.add.eventListener(marker, 'click', (function(marker,content,infoWindow){
            return function(){
                infoWindow.setContent(schedule());
                infoWindow.open(map,marker);
            };
        }) (marker, content, infowindow));
    
    */
    /*for (var i=0; i<redLineStations.length;i++){
        var contentString = schedule();
        var infoWindow = new google.maps.InfoWindow(){
            content: contentString;
        });
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }
    */
    var redPolyline1 = new google.maps.Polyline({
            path:redLineAlewifeToJFK,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            });
    redPolyline1.setMap(map);

    //sets Polyline from JFK to Braintree
    var redPolyline2 = new google.maps.Polyline({
        path:redLineJFKToBraintree,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    redPolyline2.setMap(map);

    //sets Polyline from JFK to Ashmont
    var redPolyline3 = new google.maps.Polyline({
        path:redLineJFKToAshmont,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    redPolyline3.setMap(map);

    var image2 = "geolocationMarker.png";
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            var user = new google.maps.LatLng(userLat, userLng);
            var marker = new google.maps.Marker({
                position: user,
                title: 'Here you are!',
                icon: "geolocationMarker.png"
            });
            marker.setMap(map)
            
            var stationDistances = closestDistance(position.coords.latitude, position.coords.longitude);
            var mindist = stationDistances.mindist; 
            var closest = stationDistances.closest;
            var contentString = "" + "The closest Red Line Station to you is:" + redLineStations[closest].stationName + ". It is " + mindist + "kilometers away from you.";
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(contentString);
                infoWindow.open(map,marker);
            });
            var stationCoordinates = new google.maps.LatLng(redLineStations[closest].lat, redLineStations[closest].lng);
            var pathToStation = [
            {lat:redLineStations[closest].lat, lng:redLineStations[closest].lng},
            {lat:userLat, lng:userLng}
            ];
            var polylineUserToStation = new google.maps.Polyline({
                path:pathToStation,
                geodesic: true,
                strokeColor: '#9932CC',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            polylineUserToStation.setMap(map);
        });
    } else {
            alert('Your browser does not support geolocation. What a shame.');
    }
}


/*

request = new XMLHttpRequest();
request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json",true);
request.onreadystatechange = schedule;
request.send(null);
function schedule(){
    if(request.readyState == 4 && request.status == 200){
        contentStringStations = "";
        //raw = request.responseText;
        redLineData = JSON.parse(request.responseText);
        for (i=0; i < redLineData["TripList"]["Trips"].length; i++){
            contentStringStations += "<p>The Next Scheduled Train to" + " " + ["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + redLineData["TripList"]["Trips"][i]["Destination"] +  " bound, will arrive in " + redLineData["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds</p>";
        }
        var infoWindow = new google.maps.InfoWindow({
            content: contentStringStations
        });
    } else if (request.readyState == 4 && request.status != 200) {
        document.getElementById("list").innerHTML = "<p> Oh no, your browser doesn't support this feature. </p> "
    }
};

*/

function closestDistance(userLat,userLng){
    var pi = Math.pi;
    var R = 6371;
    var distances = [];
    var closest = -1;

    for(var i=0; i<redLineStations.length;i++) {
        var stationLat = redLineStations[i].lat;
        var stationLng = redLineStations[i].lng;
        var x1 = stationLat - userLat;
        var dLat = x1 * Math.PI / 180;
        var x2= stationLng - userLng;
        var dLng = x2 * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(userLat*Math.PI/180) * Math.cos(stationLat*Math.PI/180) * Math.sin(dLng/2) * Math.sin(dLng/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] =d;
        if (closest == -1 || d <distances[closest]) {
            closest = i;
            mindist = d;
        }
    }
    return {
        mindist: mindist,
        closest: closest
    };
}

//google.maps.event.addDomListener(window,'load',initialize);
