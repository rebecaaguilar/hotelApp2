//network information  valida si el dispositivo esta conectado a alguna red
var conection = {
	isConnected: function () {
	   if (navigator.connection.type!=Connection.NONE) 
	   	return true;
	   else 
	   	return false;	   	
	}
};