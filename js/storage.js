//Almacenamiento
var almacenamiento = {
    createReg: function(nom, id){
        window.localStorage.setItem('name',nom);
        window.localStorage.setItem('uuid',id);
    },
    isRegistered: function(){
        if(window.localStorage.getItem('uuid') != undefined && window.localStorage.getItem('uuid') != '')
            return true;
        else
            return false;
    },
    db:window.openDatabase("hotelApp", "1.0", "Hotel App", 200000),   // los 200000 son bytes
    
    reservar: function (th,ha,pr,di) {
    	
					function populateDB(tx) {   				
    					tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id, th, ha, pr, di)');
    					tx.executeSql('INSERT INTO reservas (th, ha, pr, di) VALUES ("'+th+'","'+ha+'","'+pr+'","'+di+'")');
					}

					function errorCB(err) {
    						alert("Error processing SQL: "+err);
					}

					function successCB() {
    						// alert("success!");
    						window.location.href="#home";
    						navigator.notification.alert('Reserva guardada en espera de sincronización',null,'Guardado','Aceptar'); //esta es la muetra de mensajes con phonegap
					}
    	    	
      			almacenamiento.db.transaction(populateDB, errorCB, successCB);   //almacenamiento es el nombre de la clase, db es el nombre del atributo      			  			      			      			      			          	
    },
//====================================METODO QUE CONSULTA LAS RESERVAS DE LA TABLA    
     leerReservas: function () {
     	   function populateDB(tx) {
     	   	tx.executeSql("select * from reservas",[],function(tx2,r){
     	   		alert(r.rows.length);
     	   	},function (err) {
     	   		alert('Error: '+err.code); 
     	   	});     	   	
     	   }
     	   function errorCB() {
     	   	    alert('Error: '+err.code);
     	   }
     	   function successCB () {
     	   	// funcion en caso de que la consulta sea satisfactoria
     	   	var x=null;
     	   }
     	   
     	   almacenamiento.db.trsansaction(populateDB, errorCB, successCB);
     	   
     }
};





var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);

