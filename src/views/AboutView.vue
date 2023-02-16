<script>
export default {
  name: "PCView",
  data() {
    return {
      items: [],
      email: '',
      emailCrear: '',
      nombreCrear: '',
      presupuestoCrear: '',
      usoCrear: '',
      peticionesCrear: '',
    }
  },
  mounted() {
    fetch("http://localhost:3000/pc")
      .then(response => response.json())
      .then(data => {
        this.items = data
      })
  },
  methods: {
    crearPresupuesto() {
      const presupuesto = {
        email: this.emailCrear,
        name: this.nombreCrear,
        presupuesto: this.presupuestoCrear,
        uso: this.usoCrear,
        peticiones: this.peticionesCrear,
        estado: "pendiente"
      }
      fetch("http://localhost:3000/presupuestos")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].email == this.emailCrear) {
              alert("Ya existe un presupuesto con ese email")
              return
            } else {
              fetch("http://localhost:3000/presupuestos", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(presupuesto)
              })
                .then(response => response.json())
                .then(data => {
                  console.log(data)
                })
            }
          }
        })
    }
  },
  buscarEmail() {
    fetch("http://localhost:3000/presupuestos")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].email == document.getElementById("buscarEmail").value) {
            console.log(data[i])
            document.getElementById("resultadoBusqueda").setAttribute("data-id", data[i].id)
            document.getElementById("resultadoBusqueda").innerHTML =
              "Nombre: " + data[i].name +
              "<br>Presupuesto: " + data[i].presupuesto +
              "<br>Uso: " + data[i].uso +
              "<br>Comentario: " + data[i].peticiones 
          }
        }
      })
  },
  editarPresupuesto(id){
    fetch("http://localhost:3000/presupuestos/"+id)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  },
  borrarPresupuesto(id) {
    await fetch("http://localhost:3000/presupuestos/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }
}


</script>
<template>
  <div class="grid grid-cols-2 mt-20">
    <!--Upload your build-->
    <div class="p-4">
      <h1 class="text-xl text-center bold">Presupuestos personales</h1>
      <form @submit.prevent="crearPresupuesto()" class="flex flex-col border p-4 border-black rounded-lg">
        <label for="email">Email</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="email" v-model="emailCrear"
          placeholder="Email" />
        <label for="Nombre">Nombre</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" v-model="nombreCrear"
          placeholder="Nombre">
        <label for="Presupuesto">Presupuesto</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="number" v-model="presupuestoCrear"
          placeholder="Presupuesto">
        <label for="Uso">Tipo de uso</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" v-model="usoCrear" placeholder="Uso">
        <label for="Comentario">Peticiones especiales</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" v-model="peticionesCrear"
          placeholder="Comentario">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">Enviar</button>
      </form>
    </div>
    <div class="p-4">
      <h1 class="text-xl text-center bold">Buscador de presupuestos</h1>
      <form @submit.prevent="buscarEmail()" class="flex flex-col border p-4 border-black rounded-lg">
        <label for="email">Email</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" v-model="email" id="buscarEmail"
          placeholder="Email" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">Buscar</button>
      </form>
      <div id="resultadoBusqueda">
        <!-- <button @click="editarPresupuesto(data-id)">Editar</button> -->
        <!-- <button @click="borrarPresupuesto(data-id)">Borrar</button> -->
      </div>
    </div>
  </div>

</template>


