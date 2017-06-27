//ejercicio1
function ejercicio1(sumaNum)
{
  var res;
  var arr = [];

  for(var i=sumaNum.prop; i<=sumaNum.prop2; i++){
     arr.push(i);
  }

  var res = arr.reduce(function(valorAnterior,   valorActual, indice, vector){
    return valorAnterior + valorActual;
  });

  return res;
}
const num = {
    prop: 1,
    prop2: 10,
  };

console.log(   ejercicio1( num )  );

//ejercicio2
function Persona (nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
};
var x = new Persona("Diana Maria", 22, "estudiante", "femenino");
if (x.edad>17 && x.genero == "femenino"){
    var respuesta ="You're awesome";
    console.log(respuesta);
}else{
    var respuesta = "Upsii";
    console.log (respuesta);

  //ejercicio3
  var array = [6,5,4,3,2,1]
  var objeto= {};
  array.forEach(function(valor, indice){
    objeto["propiedad"+(indice+1)] = valor;
  });
  var x= Object.keys(objeto);
  var resultado = "";

  for(var i in objeto)
    {
      console.log(i + objeto[i]);
      resultado += i + "-->" + objeto[i] + ";";
    }
   resultado = resultado.slice(0,-1);
   console.log (resultado);



//ejercicio4
function Ficha (nombre, apellido, edad, genero, ciudad, pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
};
var ficha1 = new Ficha ("Diana María", "Silva", 22, "femenino", "Arequipa", "Peru");
  console.log("Nombre: "+ ficha1.nombre+ " "+ ficha1.apellido);
  console.log("Edad: "+ ficha1.edad);
  console.log("Pais: "+ ficha1.pais);
*/
