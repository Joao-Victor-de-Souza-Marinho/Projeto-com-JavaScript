const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    let cidade = prompt("Em qual cidade você mora?");
  if (cidade) {
    let pessoas = prompt("Quantas pessoas moram nessa cidade?");
    if (isNaN(pessoas) || pessoas <= 0){
        mensagem.innerText = "dados digitados não são validos tente de novo";
        mensagem.style.color = "red"; 
    
    } else {
        if (pessoas < 100000) {
            mensagem.innerText = `A cidade ${cidade} é pequena com apenas ${pessoas} habitantes`;
            mensagem.style.color = "blue";
        } else {
            mensagem.innerText = `A cidade ${cidade} é grande com ${pessoas} habitantes`;
            mensagem.style.color = "green";
        }
    }
  } else {
    mensagem.innerText = "Insira uma cidade "
    mensagem.style.color = "red";
  }


});