<script >
var pcs ="";
export default {
    name: "SinglePC",
    data() {
        return {
            pcs,
        }
    },
    mounted() {
        let url = "http://localhost:3000/pc/";
        let id = this.$route.params.id;
        let fetchUrl = url + id;
        console.log(fetchUrl)
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.pcs = data
                console.log(data)
            })
    },
}

</script>
<template>
    <section class="py-12 bg-black">
        <div class="sm:grid sm:grid-cols-2 p-8">
           <div class="col-span-1 p-16 rounded-lg overflow-hidden">
                <img :src="pcs.img" alt="imagen_pc" class="sm:ml-32 overflow-hidden"/>
           </div>
           <div class="col-span-1 p-12 bg-gray-500 bg-opacity-50 sm:ml-32 rounded-xl">
                <h2 class=" text-4xl text-white">{{ pcs.name }}</h2>
                <br>
                <div class="" v-for="componentes in pcs.components">
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.Procesador }}</b><br></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.PlacaBase }}</b><br></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.MemoriaRAM }}</b><br></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.DiscoDuro }}</b><br></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.TarjetaGráfica }}</b><br></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.FuentedeAlimentación }}</b></p>
                    <p class="text-2xl p-2 text-white"><b>{{ componentes.Caja }}</b></p>
                    <p class="text-2xl p-2 text-white">{{ pcs.price }}</p>
                </div>
           </div>
        </div>
    </section>
    <div class="flex bg-black justify-center">
        <router-link to="/pc"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</router-link>
    </div>
</template>