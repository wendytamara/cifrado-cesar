var codigo = prompt("INGRESA LA PALABRA A ENCRIPTAR");// palabra a descifrar
codigo = codigo.toUpperCase();// validando tanto mayusculas como minusculas
var newarrayy = []; // codigo anssi de cada palabra
   for (i=0; i < codigo.length;i++) { // ubicar el numero de cada palabra en el codigo ansci
    newarrayy.push(codigo.charCodeAt(i));
   }
   var codigoAlphabeth =[]; // ubicarlo en el codigo del alfabeto
   for (j= 0; j< newarrayy.length; j++){
   codigoAlphabeth.push(newarrayy[j]-65);
   }
   var newLetter = [];
    for (k= 0; k < codigoAlphabeth.length; k++){// obteniendo

 newLetter.push((codigoAlphabeth[k]+33) % 26);
    }
   var turningAscii = [];
   for (m =0 ; m< newLetter.length; m++){
     turningAscii.push(newLetter[m]+ 65);
   }
    var turningLetter = [];
    for (h= 0; h<turningAscii.length; h++) {
      turningLetter.push(String.fromCharCode(turningAscii[h]));
    }

    var decipheredLetter = " ";
    for (p =0; p <turningLetter.length; p++) {
      decipheredLetter += (turningLetter[p]);
    }


   console.log(decipheredLetter);
