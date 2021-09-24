function teste(){
    alert("teste");
}

function nome(){
    const nome = document.getElementById("inputnome").value;
    document.getElementById("inputnome").value = "";
    
    if(nome == ""){
        alert("preencha primeiro o campo nome");
    }else{
        
        document.getElementById("spanresultado").textContent = nome;
        document.getElementById("spanresultado").style.color = "red";
    }

    // alert(nome);
}

function sec1(){
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

    var resultado = peso / (altura * altura)

    alert(resultado);
}