// modelo para almacenar las imagenes de los productos

// librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImgSchema = new Schema({
	url: String
	id_product: {type: Schema.ObjectId, ref: 'modelProducto'},
});

module.exports = mongoose.model('modelImg', ImgSchema);


