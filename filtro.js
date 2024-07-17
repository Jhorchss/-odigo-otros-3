// Tenemos un li de productos

const productos = [ //se cambian las rutas 
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./public/img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./public/img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./public/img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./public/img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./public/img/zapato-rojo.jpg" }
]

const li = document.querySelector('#lista-de-productos') //se le agregó el identificador # para traer los productos de los id y se utiliza querySelector
const inputFiltro = document.querySelector('input'); //se le quitó el punto y el signo $

//Se puso ";" de aqui para abajo a los campos que faltaban
function displayProductos(listaProductos) {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  for (let i = 0; i < listaProductos.length; i++) {
    let d = document.createElement("div") //se pone let en lugar de var
    d.classList.add("producto")
    let ti = document.createElement("p") //se reemplaza var por let
    ti.classList.add("titulo")
    ti.textContent = listaProductos[i].nombre

    let imagen = document.createElement("img"); //se reemplaza var por let
    imagen.setAttribute('src', listaProductos[i].img);
    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

displayProductos(productos);


const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function () {  
  const texto = inputFiltro.value.toLowerCase(); //añadimos el método para convertirlo a minusculas
  console.log(texto);

  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
  /* 
  Se comenta este ciclo, porqué ya había uno arriba
    for (let i = 0; i < productosFiltrados.length; i++) {
      var d = document.createElement("div")
      d.classList.add("producto")
  
      var ti = document.createElement("p")
      ti.classList.add("titulo")
      ti.textContent = productosFiltrados[i].nombre
  
      var imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
  
      d.appendChild(ti)
      d.appendChild(imagen)
  
      li.appendChild(d)
    } */
};

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};