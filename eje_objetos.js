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
  function Propiedades(prop1, prop2, prop3, prop4, prop5, prop6){
   this.prop1 = prop1;
   this.prop2 = prop2;
   this.prop3 = prop3;
   this.prop4 = prop4;
   this.prop5 = prop5;
   this.prop6 = prop6;
   };
  var propiedad= new Propiedades(6,5,4,3,2,1);

     console.log("propiedad1-->"+ propiedad.prop1+ ":propiedad2-->"+ propiedad.prop2+ ":propiedad3-->" + propiedad.prop3 + ":propiedad4-->"+ propiedad.prop4 + ":propiedad5-->" + propiedad.prop5 + ":propiedad6-->" + propiedad.prop6 )

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
