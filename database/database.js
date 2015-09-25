var mongoose = require('mongoose');
// llamo db mongo
exports.connect = function(err, res){
	mongoose.connect('mongodb://localhost/forshare_db');// LOCAL

	if (err) throw err;
	console.log('CONECTADO A LA BASE DE DATOS DE MONGODB');
}