function somarNumeros(numero) {

  var promessa = new Promise(function (resolve, reject) {
    setTimeout(function () {

      resolve( numero + 1);
    }, 800);
  });
  return promessa;
}