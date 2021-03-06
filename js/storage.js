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

//=====================================REGISTRA LA RESERVA    
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
 //====================================REGISTRA EN HISTORIAL 
     registraHistorial: function() {
				function populateDB(tx) {   				
<<<<<<< HEAD
  					tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id, th, ha, pr, di,fecha)');
  					var d=new Date();
  					var fecha=d.getDay()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  					
    					tx.executeSql('INSERT INTO historial (th, ha, pr, di) VALUES ("'+th+'","'+ha+'","'+pr+'","'+di+'","'+fecha+')');
=======
  					tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id, th, ha, pr, di)');
    					tx.executeSql('INSERT INTO historial (th, ha, pr, di) VALUES ("'+th+'","'+ha+'","'+pr+'","'+di+'")');
>>>>>>> origin/master
					}
					function errorCB(err) {
    						alert("Error processing SQL: "+err);
					}

					function successCB() {
    						// alert("success!");
    						window.location.href="#home";
<<<<<<< HEAD
    						navigator.notification.alert('Historial se ha actualizado',null,'Historial','Aceptar'); //esta es la muestra de mensajes con phonegap
=======
    						navigator.notification.alert('Historial guardado en espera de sincronización',null,'Guardado','Aceptar'); //esta es la muestra de mensajes con phonegap
>>>>>>> origin/master
					}
               almacenamiento.db.transaction(populateDB, errorCB, successCB);   //almacenamiento es el nombre de la clase, db es el nombre del atributo
            
     },
//====================================ELIMINA RESERVA
     eliminaReserva: function(){
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
     	   	//alert("consulta satisfactoria");
     	   	// funcion en caso de que la consulta sea satisfactoria
                    function populateDB(tx) {
     	              	tx.executeSql('delete from reservas where id="'+th+')"');{
     	   		    //  alert(r.rows.length);
     	   	         },function (err) {
     	   		            alert('Error: '+err.code); 
     	   	            });     	   	
     	               }                  	   	
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
     	   	alert("consulta satisfactoria");
     	   	// funcion en caso de que la consulta sea satisfactoria
     	   	var x=null;
     	   }
     	   
     	   almacenamiento.db.trsansaction(populateDB, errorCB, successCB);
     	   
     },
     leerHistorial: function(){
     	    function populateDB(tx) {
     	   	tx.executeSql("select * from historial",[],function(tx2,r){
     	   		
     	   		var l=r.rows.length;
     	   		var hist=$('#historial.ui-content').html('');
     	   		for (i=0;i<l;i++) {
     	   			hist.append('<details> <summary>'+r.rows.item(i).th+'<summary><strong>) Tipo Habitacion: </strong>
     	   			'+r.rows.item(i).ha+'<br><strong>Personas:</strong>
     	   			'+r.rows.item(i).pr+'<br><strong>Persona:</strong>
     	   			'+r.rows.item(i).di+'<br><strong>Dias:</strong>');
     	   		},
     	   		function (err)
     	   		{
     	   			alert('Error: '+err.code); 
     	   	});     	   	
     	   }
     	   function errorCB() {
     	   	    alert('Error: '+err.code);
     	   }
     	   		}
     	   		
     	   		alert(r.rows.length);
     	   	},function (err) {
     	   		alert('Error: '+err.code); 
     	   	});     	   	
     	   }
     }
};

