// modelo de las notificaciones

// librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NotificationSchema = new Schema({
	massage: String,
	id_user: {type: Schema.ObjectId, ref: 'modelUser'},
	id_product: {type: Schema.ObjectId, ref: 'modelProducto'},
	date: Date
});

module.exports = mongoose.model('modelNotification', NotificationSchema);


