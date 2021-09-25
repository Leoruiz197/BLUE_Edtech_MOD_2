function teste(){
    alert("teste");
}

function nome(){
    const nome = document.getElementById("inputnome").value; /* getElementById  recupera um elemento por completo, com o .value ele traz apenas o valor */
    document.getElementById("inputnome").value = "";
    
    if(nome == ""){
        alert("preencha primeiro o campo nome"); /* aparece na tela um balao com o escrito no meio */
    }else{
        
        document.getElementById("spanresultado").textContent = nome; /* textcontent insere o texto no meio das tags html <span> INSERE AQUI </span>*/
        document.getElementById("spanresultado").style.color = "red"; /* .style modifica o CSS atraves do JS */
    }

    // alert(nome);
}

function sec1(){ /* toogle */
    var sec = document.getElementById("primeiro");

    if(sec.style.display === "none"){
        sec.style.display = "flex";
    }else{
        sec.style.display = "none";
    }

}

function sec2(){
    var sec = document.getElementById("segundo");

    if(sec.style.display === "none"){
        sec.style.display = "flex";
    }else{
        sec.style.display = "none";
    }
}

function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var resultado = peso / (altura * altura); /* calculos matematicos com o valor retornado dos inputs */

    document.getElementById("spanIMC").textContent = resultado.toFixed(4); /* .toFixed(valor)  serve para arredondar as casas decimais */
    //alert(resultado.toFixed(2));
}

function addTarefa(){
    const li = document.createElement("li"); /* criar uma tag <li></li> HTML no DOM*/
    const tarefa = document.getElementById("inputtarefa").value;
    document.getElementById("inputtarefa").value = "";

    if(tarefa == ""){
        alert("Preencha o campo de tarefas antes de adicionar!");
    }else{
        const textotarefa = document.createTextNode(tarefa); /* Cria o texto preparado para ser inserido em uma tag HTML nova */
        li.appendChild(textotarefa); /* add filho ao pai, add conteudo ou outra tag */

        document.getElementById("MinhaLista").appendChild(li);
    }
}

function create(){
    const titulo2 = document.createElement("h2");
    const textoh2 = document.createTextNode("titulo h2");
    titulo2.appendChild(textoh2);
    document.getElementById("quarto").appendChild(titulo2);
}