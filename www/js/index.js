function onBodyLoad() {
    document.addEventListener("deviceready", PGcargado, false);
}

function PGcargado(){
    setInterval( function () {

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

        var fecha = new Date();
        $("#segundos").html(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());

    }, 1000 );
}