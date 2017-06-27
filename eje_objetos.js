var assert = require("assert");

  var arr=[];
  const sumaNum = {
  prop: 1,
  prop2: 10,
 };

for(var i=sumaNum.prop; i<=sumaNum.prop2; i++){
     arr.push(i);
  }

var respuesta= arr.reduce(function(valorAnterior,   valorActual, indice, vector){
  return valorAnterior + valorActual;
  });

console.log(respuesta);



describe ("Ejercicios objetos", function (){
  describe("Ejercicio 1", function(){
    it ("Prueba de 1 y 10", function(){
      assert.equal(55, ejercicio1(1,10));
    });
    it ("Prueba de 1 y hola", function(){
      assert.equal(1, ejercicio1(1,"hola"));
    });
    it ("Prueba de 1 y nada", function(){
      assert.equal(1, ejercicio1(1,"nada"));
  })
})
