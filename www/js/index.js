function onBodyLoad() {
    document.addEventListener("deviceready", PGcargado, false);
}

function PGcargado(){

    $.mobile.defaultPageTransition = 'flip';
    $.mobile.loadingMessage = "Cargando...";
    $.mobile.loadingMessageTextVisible = true;
    $.mobile.loadingMessageTheme = "b";
    $.mobile.pageLoadErrorMessage = "Disculpe, su solicitud no pudo ser procesada.";
    $.mobile.pageLoadErrorMessageTheme = "b";
    $.mobile.pageLoadErrorMessageTheme = "b";
    
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushState = false;

    /*setInterval( function () {
        var f       =   new Date(),
            h       =   f.getHours(),
            m       =   f.getMinutes(),
            s       =   f.getSeconds(),
            ampm    =   "";

        ampm = h > 12 ? "PM" : "AM";
        h = h > 12 ? h-12 : h;
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;
        $("#hora").html(h+":"+m+":"+s+" "+ampm);

    }, 1000 );*/
}

function corsinaction () {

    $.ajax({
        type: "GET",
        url: "http://appevt.byethost31.com/webservice.php",
        //url: "http://localhost/php_appEvt/webservice.php",
        dataType: "jsonp",
        jsonpCallback: 'photos',
        xhrFields: {
           withCredentials: true
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Cookie", "__test=32e6df54ae14656fb775b898a2ac0fd9; expires=Thu, 31-Dec-37 23:55:55 GMT; path=/");
        },
    });

}

function photos (datos) {
    console.log(datos);
    $.each(datos,function (i, v) {
        $("#empieza").append("<br/><span>Índice: "+i+" - Valor: "+v+"</span>");
    });
}

function obtenerUbicacion () {
    navigator.geolocation.getCurrentPosition( bien, mal );

    function bien (posi) {
        $("#lati").html(posi.coords.latitude);
        $("#longi").html(posi.coords.longitude);
        $("#alti").html(posi.coords.altitude);
    };

    function mal (error) {
        switch(error.code.toString()){
            case "1":
                $("#lati").html("PERMISO DENEGADO");
                $("#longi").html("PERMISO DENEGADO");
                $("#alti").html("PERMISO DENEGADO");
            break;
            case "2":
                $("#lati").html("NO DISPONIBLE");
                $("#longi").html("NO DISPONIBLE");
                $("#alti").html("NO DISPONIBLE");
            break;
            case "3":
                $("#lati").html("TIEMPO DE RESPUESTA AGOTADO");
                $("#longi").html("TIEMPO DE RESPUESTA AGOTADO");
                $("#alti").html("TIEMPO DE RESPUESTA AGOTADO");
            break;
            default:
                $("#lati").html("ERROR DESCONOCIDO");
                $("#longi").html("ERROR DESCONOCIDO");
                $("#alti").html("ERROR DESCONOCIDO");
            break;
        }
    }
}