import {livros} from '@govbr-ds/core/dist/PackageLivros.js'
console.log(livros);

window.dataBook = dataBook;
window.bookRemove = bookRemove;

// Load da page
inicio()

// Função para remover objeto 
function bookRemove(id){
    let indice = livros.findIndex(livro => livro.id == id);
    livros.splice(indice, 1);
    inicio()        
}

// Função para carregar a page
function inicio(){
    var box=""; // construção das vitrines
    livros.forEach(element => {
        let preco = element.price.toLocaleString('pt-br', {minimumFractionDigits: 2}) // imprime o dado como moeda
        box+=`
            <div id="quadrado" class="shadow-xl shadow-xl-left">
                <div id="image" class="layer-3 mb-5">
                <img src="${element.image}"/>
                </div>
                <div class="text-weight-semi-bold">
                <span id="title">${element.title}</span><br><br> 
                </div>
                <div>
                <strong id="price">R$${preco}</strong><br><br><br><br>                   
                </div>
                <div id="botoes" class"botoes">
                <button type="button" onclick="bookRemove(${element.id})">Remover</button> 
                </div>
            </div>
    ` 
    });
    document.getElementById("demo").innerHTML = box
}

// exibe os dados de cada option do select
function dataBook(id){    
    let dataBack = livros.find(e=>e.id==id);
    if(id!="0"){
        console.log(id)
        let printData=`
        <div id="livrosSelect" class"">
        <h3>${dataBack.title}</h3><br>
        <img src="${dataBack.image}"/><br>
        <p>${dataBack.description}</p>
        </div>
        `
    document.getElementById("omega").innerHTML = printData
    console.log(livros);
    }   
}

// Select dos livros
var sel=" <div id='selectDiv' class''><select onclick='dataBook(this.value)'> <option value='0'>Saiba um pouco mais sobre eles!</option>";
livros.forEach(element => {
    sel+=`
        <option value="${element.id}">${element.title}</option>
    `
})
sel+=`</select></div>`;
document.getElementById("genesys").innerHTML = sel


