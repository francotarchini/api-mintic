const mongoose = require('mongoose')
const {Schema} = mongoose;

const VentaSchema = new Schema({
        valor:{type:String,required:true},
        cantidad:{type:String,required:true},
        fecha-venta-iso:{type:Date,required:true},
        producto: [
            {
            type: _Schema.Types.ObjectId,
            ref: "productos"
            }
        ],
        documento-cliente:{type:String,required:true},
        nombre-cliente:{type:String,required:true},
        vendedor:{type: _Schema.Types.ObjectId,ref: "usuarios"}
    }
)

// Establecemos un campo virtual
VentaSchema.virtual('fecha-venta')
    .set(function(fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this.fecha-venta-iso = new Date(fecha);
})
    .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fecha-venta-iso.toISOString().substring(0,10);
});

// Ya podemos exportar el modelo
//export default model('ventas',VentaSchema);
module.exports = mongoose.model('ventas',VentaSchema);