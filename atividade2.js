// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

let btnsExpRetEl = document.querySelectorAll(".botao-expandir-retrair");

// percorre a lista de 'boo's
for (let i = 0; i < btnsExpRetEl.length; i++) {
  // atribui um evento para o 'boo' atual
  btnsExpRetEl[i].addEventListener("click", ExpandirouRetrair);
}

function ExpandirouRetrair(e) {
  let btnsExpRetEl = e.currentTarget;
  let parent = btnsExpRetEl.parentNode;
  parent.classList.toggle("expandido");

  if (parent.classList.contains("expandido")) {
    btnsExpRetEl.innerHTML = "-";
  } else {
    btnsExpRetEl.innerHTML = "+";
  }
}
