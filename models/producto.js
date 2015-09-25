// modelo de los productos

// librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductoSchema = new Schema({
	Name: String,
	description: String,
	price: Number,
	Date: Date
});

module.exports = mongoose.model('modelProducto', ProductoSchema);