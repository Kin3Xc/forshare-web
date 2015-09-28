// modelo para los pedidos generados

// librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PedidoSchema = new Schema({
	id_user: {type: Schema.ObjectId, ref: 'modelUser'},
	products: Object,
	price: Number,
	end: Date,
	Date: Date
});

module.exports = mongoose.model('modelPedido', PedidoSchema);