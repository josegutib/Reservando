

var expect = chai.expect;

describe('El horario reservado ', function(){
  it('Se debe eliminar del arreglo', function(){

    const testHorarios = listado.restaurantes[0];

    testHorarios.reservarHorario('13:00');

    expect(testHorarios.horarios[0]).to.equal('15:30');
    expect(testHorarios.horarios[1]).to.equal('18:00');
    expect(testHorarios.horarios.length).to.equal(2);

  })
})
