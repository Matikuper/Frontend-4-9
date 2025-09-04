const inputTitulo = document.querySelector('.input1');
const inputItems = document.querySelector('.input2');
const botonCrear = document.querySelector('.boton-crear');
const main = document.querySelector('main');

class Lista {
    constructor(titulo, items) {
      this.titulo = titulo;
      this.items = items.split(',').map(i => i.trim());
      this.divLista = null;
    }
  
    crearHTML() {
      const div = document.createElement('div');
      div.className = 'lista';
  
      // Título
      const h1 = document.createElement('h1');
      h1.textContent = this.titulo;
      div.appendChild(h1);
  
      // Lista
      const ol = document.createElement('ol');
      this.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
      });
      div.appendChild(ol);
  
      // Borrar
      const btnBorrar = document.createElement('button');
      btnBorrar.textContent = 'Borrar lista';
      btnBorrar.addEventListener('click', () => {
        div.remove();
      });
      div.appendChild(btnBorrar);
  
      this.divLista = div;
      return div;
    }
  
    mostrarEn(contenedor) {
      contenedor.appendChild(this.crearHTML());
    }
  }
  
  function crearLista() {
    const titulo = inputTitulo.value;
    const items = inputItems.value;
  
    if (!titulo || !items) return alert('Completa ambos campos'); // validación
  
    const lista = new Lista(titulo, items);
    lista.mostrarEn(main);
  
    // limpiar inputs
    inputTitulo.value = '';
    inputItems.value = '';
  }
  
  botonCrear.addEventListener('click', crearLista);