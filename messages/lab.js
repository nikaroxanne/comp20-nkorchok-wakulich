var request = new XMLHttpRequest();
//var url = "https://messagehub.herokuapp.com/messages.json";
request.open("GET", "data.json", true);

request.onreadystatechange = parse;
request.send();

function parse(){
    if (request.readyState ==4 && request.status == 200){
        result = "";
        //raw = request.responseText;
        lyrics = JSON.parse(request.responseText);
        //elem = document.getElementById("messages");
        result = lyrics[0].content + "&nbsp" + lyrics[0].username + "<br>" + lyrics[1].content + "&nbsp" + lyrics[1].username;
        //for (var i=0; i<lyrics.length; i++){
         //   result += lyrics[i].content + "&nbsp" + lyrics[i].content + "<br>"
        document.getElementById("messages").innerHTML = result;
    } else if (request.readystate == 4 && request.status != 200){
        document.getElementById("messages").innerHTML = "<p> Oh no, something went wrong </p>";
    }
};
