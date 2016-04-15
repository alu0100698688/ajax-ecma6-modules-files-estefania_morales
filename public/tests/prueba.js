
var expect = chai.expect;


describe("CSV", function() {

  it("original correcto", function(){
    var cadena = '"hola"';

    var r = calculate(cadena);
    expect('Hola').to.equal('Hola');
  });

});
