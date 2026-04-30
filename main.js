// Definição das datas dos objetivos
const tempoObjetivo1 = new Date("2026-11-19T23:59:00"); // comprar GTA VI
const tempoObjetivo2 = new Date("2026-11-20T23:59:00"); // Jogar GTA VI
const tempoObjetivo3 = new Date("2029-04-01T23:59:00"); // Conseguir um emprego estavel
const tempoObjetivo4 = new Date("2037-10-27T23:59:00"); // ir pra irlanda

// Lista com todos os tempos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função para calcular tempo restante
function calculaTempo(tempoObjetivo) {
  let agora = new Date();
  let diff = tempoObjetivo - agora;

  let segundos = Math.floor(diff / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return diff > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

// Atualiza cronômetro
function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    let valores = calculaTempo(tempos[i]);
    document.getElementById("dias" + i).textContent = valores[0];
    document.getElementById("horas" + i).textContent = valores[1];
    document.getElementById("min" + i).textContent = valores[2];
    document.getElementById("seg" + i).textContent = valores[3];
  }
}

// Mostrar cronômetro ao clicar
function mostrarCronometro(indice) {
  let cronometros = document.querySelectorAll(".cronometro");
  let imagens = document.querySelectorAll(".imagem-objetivo");

  // esconde tudo primeiro
  cronometros.forEach(c => c.style.display = "none");
  imagens.forEach(img => img.style.display = "none");

  // mostra só o clicado
  cronometros[indice].style.display = "block";
  imagens[indice].style.display = "block";
}

// Inicia atualização
setInterval(atualizaCronometro, 1000);