<template>
  <div class="grid grid-cols-2 mt-20">
    <!--Upload your build-->
    <div class="p-4">
      <h1 class="text-xl text-center bold">Presupuestos personales</h1>
      <form class="flex flex-col border p-4 border-black rounded-lg">
        <label for="email">Email</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="email" id="email" placeholder="Email" />
        <label for="Nombre">Nombre</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="nombre" placeholder="Nombre">
        <label for="Presupuesto">Presupuesto</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="number" id="presupuesto" placeholder="Presupuesto">
        <label for="Uso">Tipo de uso</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="uso" placeholder="Uso">
        <label for="Comentario">Peticiones especiales</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="comentario" placeholder="Comentario">
      </form>
    </div>
    <div class="flex justify-center flex-col">
      <h1 class="text-xl text-center bold">Buscador de presupuestos</h1>
      <label for="buscarEmail">Email</label>
      <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="email" id="buscarEmail" placeholder="Email" />
    </div>
  </div>

</template>
<script>
import { onMounted } from 'vue';

async function postBuild(){
    fetch('http://localhost:3000/builds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            procesador: document.getElementById("procesador").value,
            placaBase: document.getElementById("placaBase").value,
            memoriaRAM: document.getElementById("memoriaRAM").value,
            tarjetaGrafica: document.getElementById("tarjetaGrafica").value,
            discoDuro: document.getElementById("discoDuro").value,
            fuenteAlimentacion: document.getElementById("fuenteAlimentacion").value,
            caja: document.getElementById("caja").value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}
const items = [];
export default {
    name: 'AboutView',
    data() {
        return {
            items: [],
        }
    },
    mounted(){
            fetch("http://localhost:3000/builds")
                .then(response => response.json())
                .then(data => {
                    this.items = data
                })
        },
}


</script>

