//var userLat = 42.406510;
//var userLng = -71.119352;
var request = new XMLHttpRequest();
//var user = new google.maps.LatLng(userLat, userLng);
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

    for(var i =0; i<redLineStations.length; i++){
        var position = new google.maps.LatLng(redLineStations[i].lat, redLineStations[i].lng);
        var title = redLineStations[i].stationName;
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: image,
                title: title
        });
    }

    var redPolyline1 = new google.maps.Polyline({
            path:redLineAlewifeToJFK,
            //geodesic: true,
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
    //findMe();
    //showMe();
    //

var image2 = "whereAreYou.png";
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position)
            var yourLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };


var userLat = 42.406510;
var userLng = -71.119352;
var position1 = new google.maps.LatLng(userLat, userLng);
    //map.panTo(position);
var marker = new google.maps.Marker({
    position: position1,
        title: 'Here you are',
        icon: image2
});
marker.setMap(map);

google.maps.event.addListener(marker, 'click', function(){
    infoWindow.setContent(marker.title);
    infoWindow.open(map,marker);
});
}
/*
var image2 = "whereAreYou.png";
function showMe(){
    var userLat = 42.406510;
    var userLng = -71.119352;
    var position = new google.maps.LatLng(userLat, userLng);
    //map.panTo(position);
    var marker = new google.maps.Marker({
        position: position,
        title: 'Here you are',
        icon: image2
    });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent(marker.title);
        infoWindow.open(map,marker);
    });
}
*/

/*
request = new XMLHttpRequest();
request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json",true);
request.onreadystatechange = schedule;
request.send(null);
function schedule(){
    if(request.readyState == 4 && request.status == 200){
        result = "";
        //raw = request.responseText;
        redLineData = JSON.parse(request.responseText);
       // elem = getElementById("list");
        for (i=0; i < redLineData["TripList"]["Trips"].length; i++){
            result += "<p>The Next Scheduled Train to" + " " + ["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + redLineData["TripList"]["Trips"][i]["Destination"] +  " bound, will arrive in " + redLineData["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds</p>";
        }
        document.getElementById("list").innerHTML = result;
    } else if (request.readyState == 4 && request.status != 200) {
        document.getElementById("list").innerHTML = "<p> Oh no, your browser doesn't support this feature. </p> "
    }
};
*/
/*

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here.');
        //map.setCenter(pos);
    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });

} else {
   handleLocationError(false, infoWindow, map.getCenter());
}


function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
}
  */ 
    /*
    } else {
        alert("Geolocation service did not work." + "<br>" + "Please check your browser and verify that you are using one that supports geolocation.");
    }
}
*/
/*
function findMe() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            userLat = position.coords.latitude;
            userLng = position.coords.longitude;
            renderMap();
            });
    } else {
        alert("Your browser doesn't support Geolocation. Sorry.");
    }
}
*/
/*
var markerImage = "whereAreYou.png";
function renderMap(){
    user = new google.maps.LatLng(userLat, userLng);
    map.panTo(user);
    marker = new google.maps.Marker({
        position: user,
        title: 'You are here!',
        icon: markerImage
    });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(marker.title),
        infowindow.open(map, marker)
    });
}
*/
/*
function closestDistance(userLat,usrLng){
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
        }
    }
    alert(redLineStations[closest]);
}
*/
//google.maps.event.addDomListener(window,'load',initialize);
