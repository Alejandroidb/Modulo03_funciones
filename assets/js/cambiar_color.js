//creamos constante para identificar elemento a modificar
const elementDiv = document.getElementById("key");
//creamos funcion que nos ayuda a crear otro elemento dentro del contenedor padre
let crear = function (color = "purple") {
  contenedor = document.getElementById("contain");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = 200 + "px";
  nuevoElemento.style.height = 200 + "px";
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.border = "solid black 1px";
  contenedor.appendChild(nuevoElemento);
};
//llamamos a la constante y a traves de evento de teclado le cambiamos color
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    //llamamos a la constante y a traves de evento de teclado le cambiamos color
    elementDiv.style.backgroundColor = "pink";
  } else if (event.key === "s" || event.key === "S") {
    //llamamos a la constante y a traves de evento de teclado le cambiamos color
    elementDiv.style.backgroundColor = "orange";
  } else if (event.key == "d" || event.key === "D") {
    //llamamos a la constante y a traves de evento de teclado le cambiamos color
    elementDiv.style.backgroundColor = "lightblue";
  } else if (event.key == "q" || event.key == "Q") {
    //con evento de teclado creamos un elemento nuevo
    crear();
  } else if (event.key == "w" || event.key == "W") {
    //con evento de teclado creamos un elemento nuevo
    crear("grey");
  } else if (event.key == "e" || event.key == "E") {
    //con evento de teclado creamos un elemento nuevo
    crear("brown");
  }
});
