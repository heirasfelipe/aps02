var botaoAdicionar = document.querySelector("#adicionar-paciente");

//exemplo com função anônima

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
   console.log("Oi, eu fui clicado");
});

//exemplo com função nomeada
//function mostrarMensagem(event){
 //   event.preventDefault();
 //   console.log("Oi, eu fui clicado");
//}
//
//botaoAdicionar.addEventListener("click", mostrarMensagem);