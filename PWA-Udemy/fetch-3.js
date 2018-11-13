//requisição post
//https://reqres.in/api/users'

let usuario = {
  nome: 'Eric Pacheco',
  idade: 32

};

fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify(usuario),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);
