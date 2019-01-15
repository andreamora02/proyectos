var operandoa;
var operandob;
var operacion;




function calculadora(){
  var display = document.getElementById('display');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var signo = document.getElementById('sign');
var longitudMaxima = 8;

  function ValidaLongitud(display, longitudMaxima) {
              try {
                  if (display.value.length > (longitudMaxima - 1))
                      return false;
                  else
                      return true;
              } catch (e) {
                  return false;
              }
          }



  cero.onclick = function(e){
  if (display.textContent== '0') display.textContent='';
display.textContent = display.textContent  + "0";
    }


uno.onclick = function(e){
if (display.textContent== '0') display.textContent='';
    display.textContent = display.textContent + "1";
}

 dos.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "2";
  }
  tres.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "3";
  }
  cuatro.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "4";
  }
  cinco.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "5";
  }
  seis.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "6";
  }
  siete.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "7";
  }
  ocho.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "8";
  }
  nueve.onclick = function(e){
if (display.textContent== '0') display.textContent='';
      display.textContent = display.textContent  + "9";
  }

  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      operandoa = display.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = display.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = display.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = display.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = display.textContent;
      resolver();
  }
  signo.onclick = function(e){

  if (display.textContent== '0') display.textContent=display.textContent
  else if
 ( display.textContent.charAt(0) == "-")  display.textContent=display.textContent
 else
display.textContent = '-' +  display.textContent
  }

  punto.onclick = function(e){
if(display.textContent.indexOf('.') != -1) display.textContent=display.textContent
else display.textContent = display.textContent + '.'
}







limpiar();
resetear();
resolver();
//borrarcero();
}


  function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  display.textContent = res;
}
