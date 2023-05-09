var sangue = false;
var calejado = false;
var vitalidade = false;
var vitima = false;
var universitario = false;
var precognicao = false;
var reflexod = false
var cascagrossa = false;
var encararmor = false;
var esforsoextra = false;
var maldidefe = false;
var potenciapri = false;
var protpessada = false;
let tanqueDeGuerra = false;
var proleve = false;
var leveClicado = false;
var pesadoClicado = false;
var primeiroClick = true;








let sangueAfinidade = "sangueAfinidade"
let morteAfinidade = "morteAfinidade"
let energiaAfinidade = "energiaAfinidade"
let conhecimentoAfinidade = "conhecimentoAfinidade"
let Combatente = "Combatente"
let Especialista = "Especialista"
let Ocultista = "Ocultista"
var esforex = 0;
var maldef = 0;
var encmort = 0;
var ptoapr = 0;
var ccg = 0;
var uni = 0;
var unip = 0;
var sangdfe = 0;
var vida = 0;
var caleja = 0;
var vitalit = 0;
var vitim = 0;
var pe = 0;
var defesa = 0;
var sanidade = 0;
var petur = 0;
var reflxd = 0;
var prec = 0;
var polic = 0
let classe = 0
let rd = 0
let rdb = 0
let afinidade = 0
let ptoaprAFI = 0


let menuItem = document.querySelectorAll(".itemMenu")
let botaoMenu = document.querySelector("#botao")
let menu = document.querySelector(".menu")
var input = document.querySelector("#pesquisar")
var forc = document.querySelector("#for")
var agil = document.querySelector("#agi")
var vig = document.querySelector("#vig")
var pres = document.querySelector("#pre")
var intl = document.querySelector("#int")
var nexx = document.querySelector("#nex")
var refx = document.querySelector("#ref")
let fortitude = document.querySelector("#fort")
var saidav = document.querySelector("div#saidavida")
var saidap = document.querySelector("div#saidape")
var saidad = document.querySelector("div#saidadefesa")
var saidas = document.querySelector("div#saidasanidade")
var saidapt = document.querySelector("div#saidapeturno")
let saidaRd = document.querySelector("#saidaRd")
let saidaRdBloqueando = document.querySelector("#saidaRdBloquiando")
var botao = document.querySelector("#somar")
const informacao = document.getElementById("informacao");
let saidaAfinidade = document.querySelector("#opcoes")






var vigor = Number(vig.value)
var nex1 = Number(nexx.value)
var presen = Number(pres.value)
var agilidade = Number(agil.value)
var reflexo = Number(refx.value)
var gfortitude = Number(fortitude.value)








let rituaisUsuario = new Array()










botao.addEventListener("click", (e) => {
   vigor = Number(vig.value)
   nex1 = Number(nexx.value)
   presen = Number(pres.value)
   agilidade = Number(agil.value)
   reflexo = Number(refx.value)
   gfortitude = Number(fortitude.value)


   // e.preventDefault()








   rd = 0
   rdb = 0 + gfortitude
   vitalit = 15
   defesa = 10 + agilidade + reflexo
   saidad.innerText = defesa
   saidaRd.innerText = rd
   saidaRdBloqueando.innerText = rdb




   // const pegarOrigem = document.querySelector("#origemTeste");
   // const nomeOrigem = [];
   
   // // Preencher nomeOrigem com os valores de origem
   // for (let i = 0; i < origem.length; i++) {
   //    nomeOrigem.push(origem[i]["origem"]);
   // }
   
   // // Verificar se a origem foi inserida
   // if(!pegarOrigem || pegarOrigem.value === ""){
   //    alert("Insira uma origem");
   // } else if (nomeOrigem.includes(pegarOrigem.value)) {
   //    alert("Gersom");
   // } else {
   //    alert("Pinto");
   // }




   if (nex1 == 0) {


      unip = 1


   } else if (nex1 == 5) {


      unip = 1


   } else if (nex1 == 10) {


      unip = 1


   } else if (nex1 == 15) {


      unip = 2


   } else if (nex1 == 20) {


      unip = 2


   }
   else if (nex1 == 25) {


      unip = 3


   } else if (nex1 == 30) {


      unip = 3


   }
   else if (nex1 == 35) {


      unip = 4


   } else if (nex1 == 40) {


      unip = 4


   } else if (nex1 == 45) {


      unip = 5


   } else if (nex1 == 50) {


      unip = 5


   } else if (nex1 == 55) {


      unip = 6


   } else if (nex1 == 60) {


      unip = 6


   } else if (nex1 == 65) {


      unip = 7


   } else if (nex1 == 70) {


      unip = 7


   } else if (nex1 == 75) {


      unip = 8


   } else if (nex1 == 80) {


      unip = 8


   } else if (nex1 == 85) {


      unip = 9


   } else if (nex1 == 90) {


      unip = 9


   } else if (nex1 == 95) {


      unip = 10




   } else if (nex1 == 99) {


      unip = 10


   } else {


      alert("algo deu muitOOOOOOO errado")


   }






   if (nex1 == 99) {


      petur = 100 / 5
      vitim = (1 * (100 / 5))
      sangdfe = (2 * (100 / 5))
      caleja = (1 * (100 / 5))
      uni = (1 * (100 / 5))
      ccg = (1 * (100 / 5))
      ptoapr = (100 / 5)
      ptoaprAFI = (2 * (100 / 5))




   } else {


      petur = nex1 / 5
      vitim = (1 * (nex1 / 5))
      sangdfe = (2 * (nex1 / 5))
      caleja = (1 * (nex1 / 5))
      uni = (1 * (nex1 / 5))
      ccg = (1 * (nex1 / 5))
      ptoaprAFI = (2 * (nex1 / 5))
      ptoapr = nex1 / 5
   }








   if (nex1 == 0) {


      vida = 8 + vigor
      pe = 1 + presen
      sanidade = 8
      petur = 1
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = 1




   } else if (classe == 0) {
      alert("Escolha uma classe")






   } else if (nex1 == 99 && classe == Combatente) {


      vida = 20 + ((4 + vigor) * ((100 / 5) - 1))
      pe = (2 + presen) * ((100 / 5) - 1)
      sanidade = 12 + (3 * ((100 / 5) - 1))
      petur = 100 / 5
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur


   } else if (nex1 == 99 && classe === "Especialista") {


      vida = 16 + ((3 + vigor) * ((100 / 5) - 1))
      pe = (3 + presen) * ((100 / 5) - 1)
      sanidade = 16 + (4 * ((100 / 5) - 1))
      petur = 100 / 5
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur


   } else if (nex1 == 99 && classe === "Ocultista") {


      vida = 12 + ((2 + vigor) * ((100 / 5) - 1))
      pe = (4 + presen) * (100 / 5)
      sanidade = 20 + (5 * ((100 / 5) - 1))
      petur = 100 / 5
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur




   } else if (classe === "Combatente") {




      vida = 20 + (4 + vigor) * ((nex1 / 5) - 1)
      pe = (2 + presen) * ((nex1 / 5) - 1)
      sanidade = 12 + (3 * ((nex1 / 5) - 1))
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur




   } else if (classe === "Especialista") {




      vida = 16 + (3 + vigor) * ((nex1 / 5) - 1)
      pe = (3 + presen) * ((nex1 / 5) - 1)
      sanidade = 16 + (4 * ((nex1 / 5) - 1))
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur




   } else if (classe === "Ocultista") {




      vida = 12 + (2 + vigor) * ((nex1 / 5) - 1)
      pe = (4 + presen) * (nex1 / 5)
      sanidade = 20 + (5 * ((nex1 / 5) - 1))
      saidav.innerText = vida
      saidap.innerText = pe
      saidas.innerText = sanidade
      saidapt.innerText = petur
   }
   atualizarInformacao()




})
















function somarSangueDeFerro() {


   sangue = !sangue


   if (sangue && afinidade == sangueAfinidade) {


      vida = vida + sangdfe
      rdb = rdb + 5
      saidav.innerText = vida
      saidaRdBloqueando.innerText = rdb


   } else if (!sangue && afinidade == sangueAfinidade) {
      vida = vida - sangdfe
      rdb = rdb - 5
      saidav.innerText = vida
      saidaRdBloqueando.innerText = rdb
   } else if (sangue) {
      vida = vida + sangdfe
      saidav.innerText = vida
   } else {


      vida = vida - sangdfe
      saidav.innerText = vida
   }
}








function somarCalejado() {
   calejado = !calejado
   if (calejado) {
      vida = vida + caleja
      saidav.innerText = vida
   } else {
      vida = vida - caleja
      saidav.innerText = vida
   }
}












function somarVitalidade() {
   vitalidade = !vitalidade
   if (vitalidade) {
      vida = vida + vitalit
      saidav.innerText = vida
   } else {
      vida = vida - vitalit
      saidav.innerText = vida
   }
}








function somarCascaGrossa() {
   cascagrossa = !cascagrossa


   if (cascagrossa) {
      vida = vida + ccg
      rd = (vigor + rd)
      rdb = (rdb + vigor)
      saidav.innerText = vida
      saidaRd.innerText = rd
      saidaRdBloqueando.innerText = rdb
   } else {
      vida = vida - ccg
      rd = (vigor - rd)
      rdb = (rdb - vigor)
      saidav.innerText = vida
      saidaRd.innerText = rd
      saidaRdBloqueando.innerText = rdb


   }
}






//    PE




function somarUniversitario() {
   universitario = !universitario
   if (universitario) {


      petur = petur + uni
      pe = pe + unip
      saidapt.innerText = petur
      saidap.innerText = pe


   } else {


      petur = petur - uni
      pe = pe - unip
      saidapt.innerText = petur
      saidap.innerText = pe


   }
}








function somarPotencialAprimorado() {




   potenciapri = !potenciapri


   if (potenciapri && afinidade == morteAfinidade) {


      pe = pe + ptoaprAFI
      saidap.innerText = pe


   } else if (!potenciapri && afinidade == morteAfinidade) {


      pe = pe - ptoaprAFI
      saidap.innerText = pe


   } else if (potenciapri) {


      pe = pe + ptoapr
      saidap.innerText = pe


   } else {


      pe = pe - ptoapr
      saidap.innerText = pe
   }
}












function somarEncararAMorte() {
   encararmor = !encararmor
   if (encararmor && afinidade == morteAfinidade) {
      petur = petur + 3
      saidapt.innerText = petur
   } else if (!encararmor && afinidade == morteAfinidade) {
      petur = petur - 3
      saidapt.innerText = petur
   } if (encararmor) {
      petur = petur + 1
      saidapt.innerText = petur
   } else {
      petur = petur + 1
      saidapt.innerText = petur
   }
}








function somarEsforçoEstra() {




   esforsoextra = !esforsoextra
   if (esforsoextra) {
      pe = pe + 5
      saidap.innerText = pe




   } else {




      pe = pe - 5
      saidap.innerText = pe




   }
}






// Sanidade




function somarVitima() {
   vitima = !vitima
   if (vitima) {
      sanidade = sanidade + vitim
      saidas.innerText = sanidade
   } else {
      sanidade = sanidade - vitim
      saidas.innerText = sanidade
   }
}




// Defesa




function somarPrecognicao() {
   precognicao = !precognicao
   if (precognicao) {
      defesa = defesa + 2
      saidad.innerText = defesa




   } else {




      defesa = defesa - 2
      saidad.innerText = defesa
   }
}












function somarReflexosDefencivos() {
   reflexod = !reflexod
   if (reflexod) {
      defesa = defesa + 2
      saidad.innerText = defesa




   } else {
      defesa = defesa - 2
      saidad.innerText = defesa




   }
}








function somarMaldiçãoDeAcessorioDef() {
   maldidefe = !maldidefe
   if (maldidefe) {
      defesa = defesa + 5
      saidad.innerText = defesa




   } else {




      defesa = defesa - 5
      saidad.innerText = defesa
   }
}




function somarPolicial() {
   polic = !polic
   if (polic) {
      defesa = defesa + 2
      saidad.innerText = defesa




   } else {
      defesa = defesa - 2
      saidad.innerText = defesa
   }
}


function somarTanqueDeGuerra() {
   tanqueDeGuerra = !tanqueDeGuerra
   if (tanqueDeGuerra) {
      defesa = defesa + 2
      rd = rd + 2
      rdb = rdb + 2
      saidaRdBloqueando.innerText = rdb
      saidaRd.innerText = rd
      saidad.innerText = defesa
   } else {
      defesa = defesa - 2
      rd = rd - 2
      rdb = rdb - 2
      saidaRdBloqueando.innerText = rdb
      saidaRd.innerText = rd
      saidad.innerText = defesa
   }


}




//armaduras




function somarArmadura(tipo) {
   if (primeiroClick) {
      if (tipo == 2) {
         defesa = defesa + 5;
         saidad.innerText = defesa;




      } else {
         defesa = defesa + 10;
         rd = rd + 2;
         rdb = rdb + 2;
         saidaRdBloqueando.innerText = rdb
         saidad.innerText = defesa;
         saidaRd.innerText = rd;
      }




   } else {




      if (tipo == 2 && leveClicado == false && pesadoClicado) {
         defesa = defesa - 5;
         rd = rd - 2;
         rdb = rdb - 2;
         saidaRdBloqueando.innerText = rdb
         saidad.innerText = defesa;
         saidaRd.innerText = rd;
      }




      if (tipo == 1 && pesadoClicado == false && leveClicado) {
         defesa = defesa + 5
         rd = rd + 2;
         rdb = rdb + 2;
         saidad.innerText = defesa
         saidaRd.innerText = rd;
         saidaRdBloqueando.innerText = rdb


      }




   }




   if (tipo == 1) {
      primeiroClick = false;
      pesadoClicado = true;
      leveClicado = false;
   } else {
      primeiroClick = false;
      leveClicado = true;
      pesadoClicado = false;
   }




}


















//funçoes




function limparTexto() {
   const clear = document.querySelector("#search-term");
   clear.value = '';
}






function atualizar() {
   var botaoClasse = document.querySelector("#qualasuacla");
   let opicao = botaoClasse.options[botaoClasse.selectedIndex];


   classe = String(opicao.value)


}




function automatico() {
   var botaoClasse = document.querySelector("#qualasuacla");
   let opicao = botaoClasse.options[botaoClasse.selectedIndex];


   classe = String(opicao.value)


}


function verificarAfinidade() {
   var botaoAfinidade = document.querySelector("#opcoes");
   let opicao = botaoAfinidade.options[botaoAfinidade.selectedIndex];


   afinidade = String(opicao.value)






}


const btnReiniciar = document.getElementById("btn-reiniciar");
btnReiniciar.addEventListener("click", function () {
   location.reload();
});








function atualizarInformacao() {
   const valorInformacao = Number(nexx.value);


   if (valorInformacao >= 50 && classe == 0) {


      afinidade = "semAfinidade"
      opcoes.style.display = "none"


   } else if (valorInformacao >= 50) {


      // Torna o select visível
      opcoes.style.display = "block";


   } else {


      // Torna o select invisível
      afinidade = "semAfinidade"
      opcoes.style.display = "none";


   }
}


function quatroLados() {
   let saida = document.querySelector("#saida4")
   let numeroLados = 4;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function seisLados() {
   let saida = document.querySelector("#saida6")
   let numeroLados = 6;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function oitoLados() {
   let saida = document.querySelector("#saida8")
   let numeroLados = 8;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function dezLados() {
   let saida = document.querySelector("#saida10")
   let numeroLados = 10;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function dozeLados() {
   let saida = document.querySelector("#saida12")
   let numeroLados = 12;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function vinteLados() {
   let saida = document.querySelector("#saida20")
   let numeroLados = 20;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function cemLados() {
   let saida = document.querySelector("#saida100")
   let numeroLados = 100;
   let numeroAleatorio = Math.random();
   let resultadoDado = Math.floor(numeroAleatorio * numeroLados) + 1;
   saida.innerHTML = resultadoDado
}


function selectLink() {
   menuItem.forEach((item) =>
      item.classList.remove('ativo')
   )
   this.classList.add("ativo")
}


menuItem.forEach((item) =>
   item.addEventListener('click', selectLink)
)


botaoMenu.addEventListener("click", function () {
   menu.classList.toggle("expandir")
})


function openModal() {
   const modal = document.getElementById('modal-container')




   if (vida == 0) {
      alert("Adicione atributos, pericias, habilidade para somar e Click em somar")
   } else {


      if (classe == 0 && nex1 != 0) {


      } else {
         modal.classList.add('mostrar')


         modal.addEventListener('click', (e) => {
            if (e.target.id == 'modal-container' || e.target.id == "fechar") {
               modal.classList.remove('mostrar')
               localStorage.fechaModal = 'modal-container'
            }
         })
      }
   }
}


function dadosModal() {
   const modal = document.getElementById('modal-container-dados')


   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
      if (e.target.id == 'modal-container-dados' || e.target.id == "fecharDados") {
         modal.classList.remove('mostrar')
         localStorage.fechaModal = 'modal-container-dados'
      }
   })
}


function habilidadesModal() {
   const modal = document.getElementById('modal-container-habilidades')


   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
      if (e.target.id == 'modal-container-habilidades' || e.target.id == "fecharHabilidades") {
         modal.classList.remove('mostrar')
         localStorage.fechaModal = 'modal-container-habilidades'
      }
   })
}


function ritualModal() {
   const modal = document.getElementById('modal-container-ritual')


   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
      if (e.target.id == 'modal-container-ritual' || e.target.id == "fecharRitual") {
         modal.classList.remove('mostrar')
         localStorage.fechaModal = 'modal-container-ritual'
      }
   })
}


function listaRitualModal() {
   const modal = document.getElementById('modal-container-lista-ritual')


   if (rituaisUsuario == 0) {
      alert("Você não possue nehum ritual")
   } else {
      modal.classList.add('mostrar')
      modal.addEventListener('click', (e) => {
         if (e.target.id == 'modal-container-lista-ritual' || e.target.id == "fecharListaRitual") {
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container-lista-ritual'
         }
      })
   }
}


function periciaModal() {
   const modal = document.getElementById('modal-container-pericia')


   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
      if (e.target.id == 'modal-container-pericia' || e.target.id == "fecharPericia") {
         modal.classList.remove('mostrar')
         localStorage.fechaModal = 'modal-container-pericia'
      }
   })
}






const nomes = [];


for (let i = 0; i < dados.length; i++) {
   nomes.push(dados[i]['nome']);
}






function salvar() {
   let ritualAdicionado = document.querySelector("#search-term")
   let nomeRitual = document.querySelector("#search-term").value


   // cria uma nova variável "encontrado" e a define como false
   let encontrado = false;


   // itera sobre o array "nomes" e verifica se o valor de "nomeRitual" já existe
   for (let i = 0; i < nomes.length; i++) {
      if (nomeRitual == nomes[i]) {
         encontrado = true;
         break;
      }
   }


   if (encontrado) {
      if (localStorage.hasOwnProperty("rituaisUsuario")) {
         rituaisUsuario = JSON.parse(localStorage.getItem("rituaisUsuario"))
      }


      if (nomeRitual == "") {
         alert("erro")
      } else {
         rituaisUsuario.push({ nomeRitual })
         localStorage.setItem("rituaisUsuario", JSON.stringify(rituaisUsuario))
         document.querySelector("#conteudo").insertAdjacentHTML("beforeend", "Ritual: " + nomeRitual + "<br><br>")
      }
   }
   else {
      alert("Escreva o nome do ritual corretamente")
   }
}





   









