function init(){
    console.log("Hello");    
    var redLineCenter = new google.maps.LatLng(42.352271, -71.05524200000001);
    var redLineAlewifeToJFK = [
        {stationName: 'Alewife', lat: 42.395428, lng: -71.1424831},
        {stationName:'Davis', lat:42.39674, lng:-71.121815},
        {stationName:'Porter Square', lat:42.3884,  lng:-71.11914899999999},
        {stationName:'Harvard Square', lat: 42.373362, lng:-71.118956},
        {stationName:'Central Square', lat:42.365486, lng:-71.103802},
        {stationName:'Kendall/MIT', lat:42.395428, lng:-71.142483},
        {stationName:'Charles/MGH', lat:42.361166, lng:-71.070628},
        {stationName:'Park Street', lat:42.35639457, lng:71.0624242},
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
        {stationName:'Fields Corner',lat:42.300093, lng:-71.061667},
        {stationName:'Shawmut', lat:42.29312583, lng:-71.06573796000001},
        {stationName:'Ashmont', lat:42.284652, lng:-71.06448899999999}
    ];

    var myOptions = {
        center:redLineCenter,
        zoom: 7,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

//function init() {
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var image = "redline.png";

    var redCenterMarker = new google.maps.Marker({
        position: redLineCenter,
        map: map,
        icon: image,
        title: "South Station"
    });
    redCenterMarker.setMap(map);

    //function setMarkersredLine1() {

    for(var i =0; i<redLineAlewifeToJFK.length; i++){
        var position = new google.maps.LatLng(redLineAlewifeToJFK[i].lat, redLineAlewifeToJFK[i].lng);
        var title = redLineAlewifeToJFK[i].stationName;
        //redLineAlewifeToJFK[i];
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: image,
                title: title
        });
    }
    var redPolyLinePath1;
    for (var j=0; j<redLineAlewifeToJFK.length; j++){
            var redPolyLinePath1 = new google.maps.LatLng(redLineAlewifeToJFK[j].lat,redLineAlewifeToJFK[j].lng);
    }
    var redPolyline1 = new google.maps.Polyline({
            path:redPolyLinePath1,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            });
    redPolyline1.setMap(map);
    


    for(var j =0; i<redLineJFKToBraintree.length; i++){
        var position = new google.maps.LatLng(redLineJFKToBraintree[j].lat, redLineJFKToBraintree[j].lng);
        var title = redLineJFKToBraintree[i].stationName;
        //redLineAlewifeToJFK[i];
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: image,
                title: title
        });
    }
    
    var redPolyline2 = new google.maps.Polyline({
        path:redLineJFKToBraintree,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    redPolyline2.setMap(map);

    for(var k =0; k<redLineJFKToAshmont.length; k++){
        var position = new google.maps.LatLng(redLineJFKToAshmont[k].lat, redLineJFKToAshmont[k].lng);
        var title = redLineJFKToAshmont[k].stationName;
        //redLineAlewifeToJFK[i];
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: image,
                title: title
        });
    }

    var redPolyline3 = new google.maps.Polyline({
        path:redLineJFKToAshmont,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    redPolyline3.setMap(map);
}

  //      google.maps.addEventListener(marker,'click', (function(marker,i))
//            infowindow.open(map,marker)
    
    /*
    for (var j=0;j<redLineJFKToAshmont.length; i++){
        marker = new google.maps.Marker({ 
            position: new google.maps.LatLng(redLineJFKToAshmont[i].lat, redLineJFKToAshmont[i].lng),
            map : map,
            icon: image
        }) 
    }
    */
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

//google.maps.event.addDomListener(window,'load',initialize);
