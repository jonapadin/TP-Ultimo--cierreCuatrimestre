let productos = [
  { 
    nombre: "Leche",
    precio: 1500,
    stock: 6,
    img : "leche.png",
  },
  { 
    nombre: "Quesos",
    precio: 1700,
    stock: 5,
    img : "queso.png",
  },
  { 
    nombre: "Verduras",
    precio: 1200,
    stock: 12,
    img : "verduras.png",
  },
  { 
    nombre: "Carnes",
    precio: 1900,
    stock: 13,
    img : "carnes.png", 
  },
  { 
    nombre: "Pastas",
    precio: 1000,
    stock: 9,
    img : "pastasproducto.png",
  },
  { 
    nombre: "Arroz",
    precio: 1150,
    stock: 10,
    img : "arroz.png", 
  },
  { 
    nombre: "Azúcar",
    precio: 1400,
    stock: 8,
    img : "azucar.png",
  },
  { 
    nombre: "Harina",
    precio: 1250,
    stock: 6,
    img : "harina.png",
  },
  { 
    nombre: "Sal",
    precio: 500, 
    stock: 12,
    img : "sal.png", 
  },
  { 
    nombre: "Aceite",
    precio: 1180,
    stock: 5,
    img : "aceite.png",
  }
];

let cantidadComprada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const listaProductos = document.getElementById('listaProductos');

for (let i = 0; i < productos.length; i++) {
  let producto = productos[i];

  let item = document.createElement('div');
  item.classList.add('producto');

  let imgDescuento = document.createElement('img');
  imgDescuento.classList.add('imgDescuento');
  imgDescuento.src = 'oferta.png';

  let img = document.createElement('img');
  img.classList.add('imgProductos');
  img.src = producto.img;
  img.alt = producto.nombre;

  let parrafos = document.createElement('div');
  parrafos.classList.add('parrafos');

  let nombre = document.createElement('p');
  nombre.innerText = `${producto.nombre}: El precio es de $${producto.precio}`;

  let stock = document.createElement('p');
  stock.id = `stock-${i}`;
  stock.innerText = `Stock actual: ${producto.stock}`;

  let input = document.createElement('input');
  input.classList.add('caja');
  input.type = 'number';
  input.min = '0';
  input.max = producto.stock.toString();
  input.value = '0';
  input.addEventListener('change', () => {
    cantidadComprada[i] = input.value;
  });

  parrafos.appendChild(nombre);
  parrafos.appendChild(stock);
  item.appendChild(img);
  item.appendChild(parrafos);
  item.appendChild(input);
  listaProductos.appendChild(item);
}

// Función para actualizar la imagen de descuento
function actualizarDescuento() {
  let productos = document.getElementsByClassName('producto');
  for (let i = 0; i < productos.length; i++) {
    let imgDescuento = productos[i].querySelector('.imgDescuento');
    if (productos.stock[i] === 3) {
      imgDescuento.style.display = 'block';
    } else {
      imgDescuento.style.display = 'none';
    }
  }
}

// Evento para el botón de calcular total
document.getElementById('calcularTotal').addEventListener('click', calcularTotal);

// Evento para el botón de comprar
document.getElementById('comprar').addEventListener('click', () => {
  calcularTotal();
  let total = document.getElementById('total').innerText;
  if (total > 0) {
    let check = document.getElementById('check');
    check.classList.add('confirma');
    check.innerText = `¡Compra realizada con éxito! El total de tu compra es de: $${total}`;
    for(let i = 0; i < productos.length; i++) {
      if (cantidadComprada[i] > 0 && cantidadComprada[i] <= productos[i].stock) {
        productos[i].stock -= cantidadComprada[i];
        document.getElementById(`stock-${i}`).innerText = `Stock actual: ${productos[i].stock}`;
      }
    }
  
  } else {
    let check = document.getElementById('check');
    check.classList.add('rechaza');
    check.innerText = "No hay productos seleccionados o la cantidad es cero.";
  }
});