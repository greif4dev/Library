import { livros } from "@govbr-ds/core/dist/PackageLivros.js";
console.log(livros)
window.dataBook = dataBook;
window.enviar = enviar;
let dataBack = 0


// tela do livro e do formulário
function dataBook(id) {
    dataBack = livros.find(e => e.id == id);
    if (id != "0") {
        console.log("dataBook id" + id)
        let preco = dataBack.price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) // imprime o dado como moeda

        // vitrine do livro
        let printData = ` 
        <div id="quadrado" class="shadow-xl shadow-xl-left">
            <div id="image" class="layer-3 mb-5">
            <img src="${dataBack.image}"/>
            </div>
            <div class="text-weight-semi-bold">
            <span id="title">${dataBack.title}</span><br><br> 
            </div>
            <div>
            <strong id="price">R$${preco}</strong><br><br><br><br>                   
        </div>`

        // formulário
        let entradaLivro =
            `<div id="entradaLivro">
            <form action="javascript: enviar(${id});">
                <label for="tituloLivro">Título</label>
                <br>
                <input type="text" id="titulo" name="titulo">
                <br>
                <label for="preçoLivro">Preço</label>
                <br>
                <input type="text" id="preço" name="preço">
                <br>
                <label for="imagemLivro">Foto</label>
                <br>
                <input type="url" name="foto" id="foto" placeholder="https://linkdasuafoto">
                <br>
                <label for="Livro">Descrição</label>
                <br>
                <textarea name="descrição" id="descrição" cols="30" rows="10"></textarea>
                <br>
                <input type="submit" value="Enviar Edição">
            </form>
        </div>`

        document.getElementById("omega").innerHTML = printData;
        document.getElementById("entradaLivro").innerHTML = entradaLivro;

        // formtação do campo Preço 
        let input = document.querySelector('#preço');

        input.addEventListener('input', function () {
            const valor = this.value.replace(/[^\d]/g, ''); // remove caracteres não numéricos
            if (valor.length > 2) { // adiciona casas decimais
                this.value = valor.slice(0, -2) + '.' + valor.slice(-2);
            }
            else {
                this.value = valor;
            }
        });

        // autopreenchimento dos campos
        let campoTitle = document.getElementById("titulo");
        let campoPrice = document.getElementById("preço");
        let campoPic = document.getElementById("foto");
        let campoDescription = document.getElementById("descrição");

        campoTitle.value = dataBack.title;
        campoPrice.value = dataBack.price;
        campoPic.value = dataBack.image;       
        campoDescription.value = dataBack.description;
    }
}

// Select dos livros
var sel = " <div id='selectDiv' class''><select onclick='dataBook(this.value)'><option value='0'>Escolha um Livro!</option>";
livros.forEach(element => {
    sel += `
        <option value="${element.id}">${element.title}</option>
    `
})
sel += `</select></div>`;
document.getElementById("genesys").innerHTML = sel

//Edição dos Livros/Objetos
function enviar(id) {
    var tituloValue = document.getElementById('titulo').value;
    var precoValue = document.getElementById('preço').value;
    var fotoValue = document.getElementById('foto').value;
    var descricaoValue = document.getElementById('descrição').value;

    const floatValue = Number.parseFloat(precoValue); // transforma a variável para float
    console.log(typeof fvalue);

    // alteração dos dados dentro do array
    dataBack.title = tituloValue;
    dataBack.price = floatValue;
    dataBack.image = fotoValue;
    dataBack.description = descricaoValue;

    console.log(dataBack);
    console.log(livros);
    dataBook(id);
}



