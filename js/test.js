

var expect = chai.expect;

describe('El horario reservado ', function(){
  it('Se debe eliminar del arreglo', function(){
    // Selecciono en una variable, el primer restaurant del listado
    const testHorarios = listado.restaurantes[0];
    // Reservo
    testHorarios.reservarHorario('13:00');

    expect(testHorarios.horarios[0]).to.equal('15:30');
    expect(testHorarios.horarios[1]).to.equal('18:00');
    expect(testHorarios.horarios.length).to.equal(2);

  })
})

describe('Las puntuaciones', function(){
  it('Deben ejecutar el promedio de calificaciones', function(){

    const testPuntuaciones = listado.restaurantes[0];
    const promedio = (testPuntuaciones.calificaciones.reduce(function(a,b){return a+b}))/testPuntuaciones.calificaciones.length;


    //console.log(testPuntuaciones2.calificaciones.length);

    expect(testPuntuaciones.obtenerPuntuacion()).to.equal(promedio);


  })
  it("Deben dar 0 de no poseer puntuación alguna", function () {
    const testPuntuaciones2 = listado.restaurantes[1];
    for(let i=testPuntuaciones2.calificaciones.length; i>0; i--){
      testPuntuaciones2.calificaciones.pop()
    }
    expect(testPuntuaciones2.obtenerPuntuacion()).to.equal(0);

  })
})

describe('La funcion calificar', function(){
  it('Debe aumentar el largo del array calificaciones', function(){
    const testCalificar = listado.restaurantes[3];
    const arrayCalificaciones = listado.restaurantes[3].calificaciones.length;
    testCalificar.calificar(8);
    const nuevoarray = listado.restaurantes[3].calificaciones.length;
    expect(nuevoarray).to.equal(arrayCalificaciones+1)
  })

  it('Debe calificarse con numeros', function(){
    const calificacion = 7;
    expect(calificacion).to.be.a('number');
  })
})

describe('Al buscar restaurante', function(){
  it('El id debe referenciar a un determinado hotel',function(){
    const testBuscar = listado.buscarRestaurante(1);
    expect(testBuscar.nombre).to.be.equal('TAO Uptown');
  })
})

describe('La funcion obtenerRestaurantes',function(){
  it('debe retornar un restaurant específico de acuerdo a los filtros',function(){
    const testObtenerRes = listado.obtenerRestaurantes("Hamburguesa","Nueva York","18:00");
    expect(testObtenerRes[0].nombre).to.be.equal("The Counter");
  })
})

describe('nueva funcionalidad TDD, Reservas',function(){
  it('Se comprueba que devuelva precio base de una instancia de Reserva',function(){
    const res1 = new Reserva(new Date(2019,04,15,11,00),8,350,'DES1');

    expect(res1.calcularPrecioBase()).to.be.equal(2800)
  })
  it('Se comprueba que devuelva precio final de una instancia de Reserva',function(){
    const res2 = new Reserva(new Date(2019,04,15,11,00),8,350,'DES1');

    expect(res2.calcularPrecioFinal()).to.be.equal(2170)
})

  it('Se verifica que la funcion calcularAdicionalPorcentaje devuelva los valores apropiados', function(){
    const fecha1 = new Date(2018,07,24,20,30)
    const fecha2 = new Date(2018,07,24,11,00)
    const fecha3 = new Date(2018,07,23,13,00)
    const fecha4 = new Date(2108,07,22,15,00)
    const res3 = new Reserva(fecha1)
    const res4 = new Reserva(fecha2)
    const res5 = new Reserva(fecha3)
    const res6 = new Reserva(fecha4)

    expect(res3.calcularAdicionalPorcentaje()).to.be.equal(0.15)
    expect(res4.calcularAdicionalPorcentaje()).to.be.equal(0.1)
    expect(res5.calcularAdicionalPorcentaje()).to.be.equal(0.05)
    expect(res6.calcularAdicionalPorcentaje()).to.be.equal(0)

  })

  it('Se verifica que la funcion calcularDescuentoPorcentaje devuelva los valores apropiados', function(){
    const res7 = new Reserva(new Date(2018,07,12,11,00),4,350,'DES1');
    const res8 = new Reserva(new Date(2018,07,12,11,00),7,350,'DES1');
    const res9 = new Reserva(new Date(2018,07,12,11,00),15,350,'DES1');
    const res10 = new Reserva(new Date(2018,07,12,11,00),0,350,'DES1');

    expect(res7.calcularDescuentoPorcentaje()).to.be.equal(0.05)
    expect(res8.calcularDescuentoPorcentaje()).to.be.equal(0.1)
    expect(res9.calcularDescuentoPorcentaje()).to.be.equal(0.15)
    expect(res10.calcularDescuentoPorcentaje()).to.be.equal(0)
  })

  it('Se verifica que la funcion calcularDescuentoFijo devuelva los valores correctos', function(){
    const res11 = new Reserva(new Date(2018,07,12,11,00),4,350,'DES1');
    const res12 = new Reserva(new Date(2018,07,12,11,00),4,350,'DES200');
    const res13 = new Reserva(new Date(2018,07,12,11,00),4,350);

    expect(res11.calcularDescuentoFijo()).to.be.equal(350)
    expect(res12.calcularDescuentoFijo()).to.be.equal(200)
    expect(res13.calcularDescuentoFijo()).to.be.equal(0)
  })

  it('Se comprueba que la funcion esViernesSabadoODomingo devuelva los valores correctos', function(){
    const fecha5 = new Date(2018,07,10,11,00);
    const fecha6 = new Date(2018,07,11,11,00);
    const fecha7 = new Date(2018,07,12,11,00);
    const fecha8 = new Date(2018,07,13,11,00);

    // Se espera valor TRUE al ser Viernes
    expect(esViernesSabadoODomingo(fecha5)).to.be.equal(true)
    // Se espera valor TRUE al ser Sábado
    expect(esViernesSabadoODomingo(fecha6)).to.be.equal(true)
    // Se espera valor TRUE al ser domingo
    expect(esViernesSabadoODomingo(fecha7)).to.be.equal(true)
    // Se espera valor FALSE al ser lunes
    expect(esViernesSabadoODomingo(fecha8)).to.be.equal(false)

  })

  it('Se comprueba que la funcion esHorarioEspecial devuelva los valores correctos', function(){
    const fecha9 = new Date(2018,07,10,14,00);
    const fecha10 = new Date(2018,07,11,21,00);
    const fecha11 = new Date(2018,07,12,10,00);
    const fecha12 = new Date(2018,07,13,19,00);

    // Se espera valor TRUE porque las 14:00hs estan dentro del rango horario especial
    expect(esHorarioEspecial(fecha9)).to.be.equal(true)
    // Se espera valor TRUE porque las 21:00hs estan dentro del rango horario especial
    expect(esHorarioEspecial(fecha10)).to.be.equal(true)
    // Se espera valor FALSE porque las 10:00hs no estan dentro del rango horario especial
    expect(esHorarioEspecial(fecha11)).to.be.equal(false)
    // Se espera valor FALSE porque las 19:00hs no estan dentro del rango horario especial
    expect(esHorarioEspecial(fecha12)).to.be.equal(false)

  })
})
