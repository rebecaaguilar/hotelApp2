var fn = {
//=========================== READY ===================
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);  //deviceready es solo para dispositivos
    },
//=========================== INIT ===================    
    init: function(){
        if(!almacenamiento.isRegistered())
            window.location.href = "#registro";
        $('#registro a:eq(0)').tap(capture.takePhoto);
        $('#registro a:eq(1)').tap(fn.registrar);
        fn.crearReserva();
    },
//=========================== REGISTRAR ===================
    registrar: function(){
        var nom = $('#registro input:eq(0)').val();
        var mail = $('#registro input:eq(1)').val();
        var tel = $('#registro input:eq(2)').val();
        var img = $('#registro a:eq(0)').attr('rel');
        
        if(nom != '' && mail != '' && tel != '' && img != '' && img != undefined)
            server.sendData(nom,mail,tel,img);
        else
            navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Datos','Aceptar');
    },
//=========================== CREAR RESERVA    
    crearReserva: function () {
         // al darle tab a cualquier elemento
         
         var reserva= {
         	
         	 selecTH: function(){             // método selecTH
         	 	if($(this).index()>0){
                  // de prueba alert($(this).index());          // este index ex el div en donde esta la funcion de reserva en index.html
                  $('#nr1').attr('th',$(this).index());       // hacer referencia al tipo de habitacion cuando no existe el atributo manda el mansaje de INDEFINIDO
                  $('#nr1 ul:eq(0) li a').css('background','#f6f6f6');
                  $(this).find('a').css('background-color','red');      	 		
         	 	}
         	 		 	         	 	
         	 },
         	 
//=========================== SIGUIENTE ===================         	 
         	 siguiente: function () {           // método siguiente
         	 	// solo fue para prueba  alert($('#nr1').attr('th'));
         	 	var th=$('#nr1').attr('th');
         	 	if (th!=undefined && th!='')  // indefinido es porque el usuario no ha seleccionado ningun tipo de habitación
         	 	    window.location.href='#nr2';
         	 },
//=========================== RESERVAR ===================         	 
         	 reservar: function () {
         	 	   var th=$('#nr1').attr('th');
         	 	   var ha=$('#nr2 select:eq(0)').val();
         	 	   var pr=$('#nr2 select:eq(1)').val();
         	 	   var di=$('#nr2 select:eq(2)').val();
         	 	   if (conection.isConnected()) {
         	 	   	//alert();
                                server.sendReserva(th,ha,pr,di);
         	 	   }  
         	 	   else {
         	 	   	alert("entro a ejecutar las operaciones");
         	 	   	almacenamiento.reservar(th,ha,pr,di);
         	 	   	almacenamiento.leerReservas();
                     almacenamiento.registraHistorial(th,ha,pr,di);
                     almacenamiento.eliminaReservas(th,ha,pr,di);
         	 	   }       	 	            	 	   
                 //alert("entro a reservar Tipo hab="+th+" Habitaciones = "+ha+" Personas = "+pr+" Dias = "+di);	 	
              
         	 }
         };
         
//=========================== EJECUTAR LOS METODOS ===================         
         $('#nr1 ul:eq(0) li').tap(reserva.selecTH);          //ahora, aqui el ul es la lista en donde estan los tipos de habitacion x lo tanto el index de arriba hará referencia al tipo de habitación
         $('#nr1 ul:eq(1) li:eq(1)').tap(reserva.siguiente);   // esto es que solo funcione para el boton siguiente eq(0) seria el boton cncelar y eq(1) seria el boton siguiente)
         $('#nr2 ul:eq(1) li:eq(1)').tap(reserva.reservar);  //Ejecuta el metodo reservar cuando el usuario le da click al boton de reservar
<<<<<<< HEAD
 			$('#historial').tap(almacenamiento.leerHistorial);  //para que muestre los registros de la base de datos
=======
         $('#historial').tap(almacenamiento.leerReservas);  //para que muestre los registros de la base de datos
>>>>>>> origin/master
    }
};
$(fn.ready);
//$(fn.crearReserva);
