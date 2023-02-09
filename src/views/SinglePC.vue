<script>
    const pcs = [];
    var id;
    var url = "http://localhost:3000/pc/";
    export default {
        name: "SinglePC",
        data() {
            console.log(pcs)
            return {
                pcs: [],
            }
        },
        mounted() {
            id = this.$route.params.id;
            let fetchUrl = url + id;
            fetch(fetchUrl)
                .then(response => response.json())
                .then(data => {7
                    this.pcs = data
                    pcs.push(data)
                })
        }
    }

</script>
<template>
    <div v-for="comp in pcs" :key="comp.id" class="mt-32 grid grid-cols-2">
        <div>
            <img :src="comp.img" alt="PC Photo" />
        </div>
        <div>
            <h2 class="text-slate-700">{{ comp.name }}</h2>
            <p class="mt-1 text-sm text-slate-400">{{ comp.description }}</p>
        </div>
    </div>
</template>