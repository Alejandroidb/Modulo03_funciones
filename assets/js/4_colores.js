//creamos constantes que seran modificadas
const divs1 = document.getElementById("div1");
const divs2 = document.getElementById("div2");
const divs3 = document.getElementById("div3");
const divs4 = document.getElementById("div4");
//creamos funcion que modificara las constantes
const colorBlack = (e) => {
  e.target.style.backgroundColor = "black";
};
//con evento de click modificaremos las constante
//segun la funcion que creamos previamente
divs1.addEventListener("click", colorBlack);
divs2.addEventListener("click", colorBlack);
divs3.addEventListener("click", colorBlack);
divs4.addEventListener("click", colorBlack);
