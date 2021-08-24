const sumar = require("../index");
const assert = require("assert");
// Asserts = afirmacion
describe("Probar la suma de los dos numeros", ()=>{
 //Afirmamos que cinco mas siete es 17
 it("Cinco mas siete son 12", ()=>{
  assert.equal(12, sumar(5,7));
 });
 //Afirmacion que 5 mas 7 no son 57
 it("cinco mas siete no son 57",()=>{
  assert.notEqual("57", sumar(5,7));
 });
});
