//network information  valida si el dispositivo esta conectado a alguna red
var conection = {
	isConnected: function () {
	   if (navigator.connection.type!=Connection.NONE)
	   { 
	      alert("true");
	   	return true;
	   }
	   else 
	   {
	   	alert("false");
	   	return false;
	   }	   	
	}
};