const Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento){
    this.horario = horario,
    this.cantidadPersonas = cantidadPersonas,
    this.precioPersona = precioPersona,
    this.codigoDescuento = codigoDescuento
}

Reserva.prototype.calcularPrecioBase = function(){
  return this.cantidadPersonas * this.precioPersona;
}

// precio final = precio base + adicionales - descuentos
Reserva.prototype.calcularPrecioFinal = function(){
  let that = this;
  const getAdicionales = function(){
    // ??
  }

  const getDescuentos = function(){
    // ??
  }

  return this.calcularPrecioBase() // + getAdicionales() - getDescuentos()
}
