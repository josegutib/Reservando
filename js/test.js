

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

describe('La funcion sumatoria',function(){
  it('debe sumar elementos de un array',function(){
    const array = [1,2,3];
    expect(sumatoria(array)).to.be.equal(6);
  })

  it('debe devolver 0 si esta vacio',function(){
    const array = [];
    expect(sumatoria(array)).to.be.equal(0);
  })
})

describe('la funcion division',function(){
  it('debe devolver el resultado dela division de dos parametros',function(){

    expect(division(6,2)).to.be.equal(3);
  })

  it('debe devolver el resultado dela division de dos parametros',function(){

    expect(division(6,0)).to.be.NaN;
  })

  it('debe devolver el resultado dela division de dos parametros',function(){

    expect(division(0,0)).to.be.NaN;
  })

  it('debe devolver el resultado dela division de dos parametros',function(){

    expect(division(8,1)).to.be.equal(8);
  })

  it('debe devolver el resultado dela division de dos parametros',function(){

    expect(division(0,5)).to.be.equal(0);
  })
})
