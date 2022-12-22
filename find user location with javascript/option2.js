// before, you need import jquery in html, the script below:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

// for write the city in html, just put the id: Adress



// JQuery function below: 

$.get("https://ipinfo.io/json", function (response) {
        $("#ip").html("IP: " + response.ip);
        $("#address").html(response.city );
        $("#details").html(JSON.stringify(response, null, 4));
    }, "jsonp");

