
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let botao = document.querySelector("button");

botao.onclick = validar;

 function validar(){
     if(first.value == ""){
         alert("Preencha o campo nome");
     }else if(last.value == ""){
         alert("Preencha o campo sobrenome");
     }else{
         alert("O nome é: " + first.value  +
              "\nO sobrenome é" + last.value
       );
     }
}