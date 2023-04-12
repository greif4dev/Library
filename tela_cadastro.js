import {livros} from '@govbr-ds/core/dist/PackageLivros.js'
console.log(livros);
window.formBook = formBook;
window.gerarID = gerarID;

// gera ID para o novo objeto entrar no array
let ultimoID = 1009;
function gerarID(){
    ultimoID++;
    return ultimoID;
}

function formBook(){
    var name = document.getElementById("nomeLivro").value;
    var price = document.getElementById("precoLivro").value;
    var img = document.getElementById("imagemLivro").value;
    var sinopse = document.getElementById("sinopseLivro").value;

    const floatValue = Number.parseFloat(price); // transforma a variável para float

    const formBook = {
        "id": gerarID(),
        "title": name,
        "price": floatValue,
        "image": img,
        "description": sinopse
    };

    let msgFinal = `<h3>Cadastro concluído com sucesso!`

    if (livros.push(formBook)) {
        document.getElementById("cadastroLivro").innerHTML = msgFinal;
    } 
}

// formtação do campo Preço 
const input = document.getElementById('precoLivro');

input.addEventListener('input', function() {
  const valor = this.value.replace(/[^\d]/g, ''); // remove caracteres não numéricos
  if (valor.length > 2) { // adiciona casas decimais
    this.value = valor.slice(0, -2) + '.' + valor.slice(-2);
  }
  else {
    this.value = valor;
  }
});

