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
    fetch("http://localhost:3000/presupuestos")
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
              let eleccion = prompt("Desea modificar el presupuesto? S / N")
              if (eleccion == "s") {
                if (this.nombreCrear == "") {
                  this.nombreCrear = data[i].name
                }
                if (this.presupuestoCrear == "") {
                  this.presupuestoCrear = data[i].presupuesto
                }
                if (this.usoCrear == "") {
                  this.usoCrear = data[i].uso
                }
                if (this.peticionesCrear == "") {
                  this.peticionesCrear = data[i].peticiones
                }
                fetch("http://localhost:3000/presupuestos/" + data[i].id, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(
                    {
                      email: this.emailCrear,
                      name: this.nombreCrear,
                      presupuesto: this.presupuestoCrear,
                      uso: this.usoCrear,
                      peticiones: this.peticionesCrear,
                      estado: "pendiente"
                    }
                  )
                })
                  .then(response => response.json())
                  .then(data => {
                    window.location.reload()
                    console.log(data)
                  })
              } else if (prompt == "N") {
                alert("Presupuesto no modificado")
              } else {
                alert("Opción no válida")
              }
              break
            } else if (i == data.length - 1) {
              fetch("http://localhost:3000/presupuestos", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(presupuesto)
              })
                .then(response => response.json())
                .then(data => {
                  window.location.reload()
                  console.log(data)
                })
            }
          }
        })
    },
    editarPresupuesto(id) {
      const presupuesto = {
        edit_email: this.emailCrear,
        edit_name: this.nombreCrear,
        edit_presupuesto: this.presupuestoCrear,
        edit_uso: this.usoCrear,
        edit_peticiones: this.peticionesCrear,
        edit_estado: "pendiente"
      }
      fetch(url + '/' + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(presupuesto)
      })
        .then(response => {
          if (response.ok) {
            this.presupuestos.push(presupuesto)
          } else {
            throw new Error("Error al editar")
          }
        })
    },
    buscarEmail() {
      let email = document.getElementById("buscarEmail").value;
      fetch("http://localhost:3000/presupuestos")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].email == email) {
              console.log(data[i])
              document.getElementById("resultadoBusqueda").setAttribute("data-id", data[i].id)
              document.getElementById("resultadoBusqueda").innerHTML =
                "<div class='border border-black rounded-lg p-4'>" +
                "Nombre: " + data[i].name +
                "<br>Presupuesto: " + data[i].presupuesto +
                "<br>Uso: " + data[i].uso +
                "<br>Comentario: " + data[i].peticiones +
                "<button @click='editarPresupuesto(" + data[i].id + ")'>Editar</button>" +
                "<button @click='borrarPresupuesto(" + data[i].id + ")'>Borrar</button>" +
                "</div>"
            }
          }
        })
    },
    borrarPresupuesto(id) {
      fetch("http://localhost:3000/presupuestos/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          window.location.reload()
          console.log(data)
        })
    }
  }
}


</script>
<template>
  <div class="bg-black sm:grid sm:grid-cols-2 mt-18">
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
      <div id="resultadoBusqueda" class="gap-4 mt-12">
        <div class="border bg-white grid grid-cols-2 border-black rounded-lg p-4" v-for="item in items">
          <div>
            <p>{{ item.id }}</p>
            <p>{{ item.email }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.presupuesto }}</p>
            <p>{{ item.uso }}</p>
            <p>{{ item.peticiones }}</p>
            <p>{{ item.estado }}</p>
          </div>
          <div class="flex flex-col-reverse"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="borrarPresupuesto(item.id)">Borrar</button></div>
        </div>
      </div>
    </div>
  </div>
</template>


