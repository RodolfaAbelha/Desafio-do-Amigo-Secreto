// array para armazenar os nomes digitados
let amigos = [];

// função chamada pelo botão "Adicionar"
function adicionarAmigo() {
  let input = document.querySelector('#amigo');
  let nome = input.value.trim();

  if (nome !== '') {
    amigos.push(nome); // salva no array
    atualizarLista();  // mostra na tela
    input.value = '';  // limpa campo
    input.focus();     // volta cursor
  } else {
    alert('Por favor, digite um nome!');
  }
}

// atualiza a lista <ul> na tela
function atualizarLista() {
  let lista = document.querySelector('#listaAmigos');
  lista.innerHTML = ''; // limpa lista antes de redesenhar

  amigos.forEach((amigo) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// (extra) função do botão "Sortear amigo"
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear!');
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  let resultado = document.querySelector('#resultado');
  resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`;
}
