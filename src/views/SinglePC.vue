<script>
    const pcs = [];
    var id;
    var url = "http://localhost:3000/pc/";
    export default {
        name: "SinglePC",
        mounted() {
            id = this.$route.params.id;
            let fetchUrl = url + id;
            fetch(fetchUrl)
                .then(response => response.json())
                .then(data => {
                    this.pcs = data
                    pcs.push(data)
                })
        },
        data() {
            return {
                pcs: [],
            }
        },
    }

</script>
<template>
    <div v-for="pc in pcs" class="mt-32 grid grid-cols-2">
        <div>
            <img :src="pc.img" alt="PC Photo" />
        </div>
        <div>
            <h2 class="text-slate-700">{{ pc.name }}</h2>
            <p class="mt-1 text-sm text-slate-400">{{ pc.description }}</p>
        </div>
    </div>
</template>