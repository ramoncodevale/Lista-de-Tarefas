let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    // Pegar o Valor digitado do input
   let valorInput = input.value;

    // Se Não for Vazio, Nem Nulo, Nem Indefinido
    if((valorInput !=="") && valorInput!==null && (valorInput!==undefined));

    ++contador;

    let novoItem = `<div id="${contador}" class="item clicado">
    <div onclick="marcarTarefa(${contador})" class="item-icone">
    <i id="id_${contador}" class="fa-solid fa-circle"></i>
    </div>

    <div  onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
    </div>

    <div class="item-botao">
     <button onclick="deletar(${contador})" class="delete">Deletar</button>
    </div>
   </div>`;

   // Adicionar Novo Item No Main
   main.innerHTML += novoItem;

   // Zerar os Campinhos
   input.value = "";
   input.focus();

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item"){
        item.classList.add(clicado);

        var icone = document.getElementById('icone_ + id');
        icone.classList.add('fa-circle-check');
    }

}

input.addEventListener("keyup", function (event) {
    // Se teclou o Enter(13)
    if(event.KeyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
