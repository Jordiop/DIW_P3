<script setup>
function postPresupuesto() {
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let presupuesto = document.getElementById("presupuesto").value;
    let uso = document.getElementById("uso").value;
    let peticiones = document.getElementById("comentario").value;
    let estado = "pendiente";
    //Buscamos si el email ya existe
    fetch("http://localhost:3000/presupuesto/")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email) {
                    alert("El email ya existe");
                    return;
                }
            }
            //Si no existe, lo añadimos
            fetch("http://localhost:3000/presupuesto", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        name: nombre,
                        presupuesto: presupuesto,
                        uso: uso,
                        peticiones: peticiones,
                        estado: estado
                    }),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        })
}

function borrar(id){
  fetch("http://localhost:3000/presupuesto/"+id, {
    method: "DELETE",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

function buscarPresupuesto(){
    let email = document.getElementById("buscarEmail").value;
    fetch("http://localhost:3000/presupuesto/")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].email == email){
          document.getElementById("resultadoBusqueda").innerHTML = (
            "<p>Nombre: "+data[i].name+"</p>"+
            "<p>Presupuesto: "+data[i].presupuesto+"</p>"+
            "<p>Uso: "+data[i].uso+"</p>"+
            "<p>Comentario: "+data[i].peticiones+"</p>"+
            "<p>Estado: "+data[i].estado+"</p>" +
            "<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='button' @click='borrar("+data[i].id+")'>Eliminar</button>"      
          )
        }
      }
    })
}

</script>
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" @click="postPresupuesto()">Enviar</button>
      </form>
    </div>
    <div class="flex justify-center flex-col">
      <h1 class="text-xl text-center bold">Buscador de presupuestos</h1>
      <label for="buscarEmail">Email</label>
      <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="email" id="buscarEmail" placeholder="Email" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" @click="buscarPresupuesto()">Buscar</button>
      <div id="resultadoBusqueda"></div>
    </div>
  </div>

</template>


