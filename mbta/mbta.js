<script src="http://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript">

var redLineCenter = new.google.maps.LatLng(42.352271, -71.05524200000001);
var redLineAlewifeToJFK = [

    ['Alewife', 42.395428, -71.142483, 1]
    ['Davis',  42.39674, -71.121815, 2]
    ['Porter Square', 42.3884, -71.11914899999999,3]
    ['Harvard Square',  42.373362, -71.118956, 4]
    ['Central Square', 42.365486, -71.103802, 5]
    ['Kendall/MIT', 42.395428, -71.142483, 6]
    ['Charles/MGH', 42.361166, -71.070628, 7]
    ['Park Street', 42.35639457, -71.0624242, 8]
    ['Downtown Crossing', 42.355518, -71.060225, 9]
    ['South Station', 42.352271, -71.05524200000001, 10]
    ['Broadway',  42.342622, -71.056967, 11]
    ['Andrew', 42.330154, -71.057655, 12]
    ['JFK/UMass', 42.320685, -71.052391, 13]
    ['Broadway',  42.342622, -71.056967, 14]
    ['Kendall/MIT', 42.395428, -71.142483, 15]
]

var redLineJFKToBraintree = [
    ['JFK/UMass', 42.320685, -71.052391, 1]
    ['North Quincy', 42.275275, -71.029583, 2]
    ['Wollaston', 42.2665139, -71.0203369, 3]
    ['Quincy Center', 42.251809, -71.005409, 4]
    ['Quincy Adams', 42.233391,-71.007153, 5]
    ['Braintree', 42.2078543, -71.0011385, 6]
]

var redLineJFKToAshmont = [
    ['JFK/UMass', 42.320685, -71.052391, 1]
    ['Savin Hill',  42.31129, -71.053331, 2]
    ['Fields Corner', 42.300093, -71.061667, 3]
    ['Shawmut',  42.29312583, -71.06573796000001, 4]
    ['Ashmont', 42.284652, -71.06448899999999, 5]
]

var myOptions = {
        center:redLineCenter,
        zoom: 7,
        mapTypeId:google.maps.MapTypeId.ROADMAP
}

function init() {
    var map = new.google.maps.Map(document.getElementById('map'), myOptions); {
    }
}

var image = 'mbta.gif';

var redCenterMarker = new google.maps.Marker({
    position: redLineCenter;
    map: map;
    icon: image;
    title: "South Station"
});
redCenterMarker.setMap(map);

function setMarkersredLine(map) {
    for(var i =0; i<redLineAlewifeToJFK.length; i++){
        //redLineAlewifeToJFK[i];
        marker = new.google.maps.Marker({
            position: {lat: redLineAlewifeToJFKi[i][1], lng: redLineAleWifeToJFK[i][2]},
            map: map,
            icon: image,
        });

  //      google.maps.addEventListener(marker,'click', (function(marker,i))
//            infowindow.open(map,marker)
    }
}
    

google.maps.event.addDomListener(window,'load',initialize);


var redPolyline1 = new google.maps.Polyline({
    path:redLineAlewifeToJFK,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
});
redPolyline1.setMap(map);
/*
var redPolyline2 = new google.maps.Polyline({
    path:redLineJFKToBraintree,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
});
redPolyline2.setMap(map);
 
var redPolyline3 = new google.maps.Polyline({
    path:redLineJFKToAshmont,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
});
redPolyline3.setMap(map);
*/
</script>
