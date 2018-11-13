//clonar requisi~]ao
//requisição post
//https://reqres.in/api/users'

fetch('https://reqres.in/api/users/1000')
  .then(resp => {

    if (resp.ok) {
      resp.json().then(console.log);
    } else {
      console.log('Nao existe o usuario 1000');
    }
  })
  .catch(error => {
    console.log('Erro na consulta');
    console.log(error);
  });