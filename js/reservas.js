const Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento){
    this.horario = horario,
    this.cantidadPersonas = cantidadPersonas,
    this.precioPersona = precioPersona,
    this.codigoDescuento = codigoDescuento
}

Reserva.prototype.calcularPrecioBase = function(){
  return this.cantidadPersonas * this.precioPersona;
}

Reserva.prototype.calcularAdicionalPorcentaje = function() {

    if (esViernesSabadoODomingo(this.horario)) {
        //es viernes/sabado/domingo!

        if (esHorarioEspecial(this.horario)) {
            //es horario especial y ademas es viernes/sabado/domingo!
            return 0.15
        } else {
            //NO es horario especial, pero es viernes/sabado/domingo!
            return 0.1
        }
    } else {
        //no es viernes ni sabado ni domingo

        if (esHorarioEspecial(this.horario)) {
            //es horario especial, pero no es viernes ni sabado ni domingo
            return 0.05
        } else {
            //no es horario especial ni es viernes ni sabado ni domingo
            return 0
        }
    }
}

// esta es una version simplificada de calcularAdicionalPorcentaje
Reserva.prototype.calcularAdicionalPorcentaje2 = function() {
    let porcentajeAdicional = 0

    if (esViernesSabadoODomingo(this.horario)) {
        porcentajeAdicional += 0.1
    }

    if (esHorarioEspecial(this.horario)) {
        porcentajeAdicional += 0.05
    }

    return porcentajeAdicional
}

Reserva.prototype.calcularDescuentoPorcentaje = function(){
    let accu = 0

    if (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) {
        accu += 0.05
    }
    else if (this.cantidadPersonas >= 7 && this.cantidadPersonas <= 8) {
        accu += 0.1
    }
    else if (this.cantidadPersonas >= 9) {
        accu += 0.15
    }

    if (this.codigoDescuento === 'DES15') {
      accu += 0.15
    }

    return accu
}

Reserva.prototype.calcularDescuentoFijo = function(){
    if (this.codigoDescuento === 'DES1') {
        return this.precioPersona
    }
    if (this.codigoDescuento === 'DES200') {
        return 200
    }
    return 0
}

// precio final = precio base + adicionales - descuentos
Reserva.prototype.calcularPrecioFinal = function(){
    return this.calcularPrecioBase()*(1 + this.calcularAdicionalPorcentaje() - this.calcularDescuentoPorcentaje()) - this.calcularDescuentoFijo()
}

function esViernesSabadoODomingo(fecha) {
    return fecha.getDay() === 5 || fecha.getDay() === 6 || fecha.getDay() === 0
}

function esHorarioEspecial(fecha) {
    const esHorarioEspecialDia = fecha.getHours() === 13 || (fecha.getHours() === 14 && fecha.getMinutes() === 0)
    const esHorarioEspecialNoche = fecha.getHours() === 20 || (fecha.getHours() === 21 && fecha.getMinutes() === 0)
    return esHorarioEspecialDia || esHorarioEspecialNoche
}
