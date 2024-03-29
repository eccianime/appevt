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

    $(document).on("pagechange", function (e, data) {
        var next = data.toPage[0].attributes[1];
        if( next == "home" ){
            navigator.app.exitApp();
        }
    })

    setTimeout( function () {
        $.mobile.changePage( "tpl/login.html" );
    }, 3000);

}

function corsinaction () {

    $.ajax({
        type: "GET",
        url: "http://appevt.zz.com.ve/webservice.php",
        dataType: "jsonp",
        jsonpCallback: 'respuestaJSONP',
    });
}

function respuestaJSONP (datos) {
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