//creamos constante que tendra un color de inicio
const body = document.getElementById("ele1");
body.style.backgroundColor = "green";

//creamos funcion que cambiara color de la constante creada
const pintar = (color = "white") => {
  elemento = document.querySelector("#ele1");
  elemento.style.backgroundColor = color;
  console.log(color);
};
//llamamos a la funcion a traves de un evento click
document.getElementById("ele1").addEventListener("click", () => {
  pintar("yellow");
});
