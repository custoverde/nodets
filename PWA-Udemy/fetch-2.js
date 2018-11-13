//https://reqres.in/api/users'

fetch('http://localhost:8080/login/licencas')
 .then(resp => resp.json())
 .then(respObj => {
   console.log(respObj);
 })

//fetch('https://www.wikipedia.org')
// .then(resp => resp.text())
// .then(html => {
//  console.log(html);
//
//  });

// let licenca = {
//   cnpjCpf: '12345678900',
//   dataCadastro: '2018-08-01 00:00:00',
//   validoAte: '2028-01-01 00:00:00'
// }

// console.log(JSON.stringify(licenca));

// fetch('http://localhost:8080/login/licenca', {
//   method: 'POST',
//   body: JSON.stringify(licenca),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(resp => resp.json())
// .then(console.log)
// .catch(console.error);

