<script>
export default {
    name: "PCView",
    data() {
        return {
            items: [],
        }
    },
    async mounted() {
        fetch("http://localhost:3000/pc")
            .then(response => response.json())
            .then(data => {
                this.items = data
            })
    }
}
</script>
<template>
    <section class="py-12 bg-black">
        <h5 class="text-4xl mt-8 text-center text-white">Nuestra selección de PC</h5><br>
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <article v-for="item in items" :key="item.id"
                class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a :to="{ path: '/pc/' + item.id }">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                        <img :src="item.img" alt="Hotel Photo" />
                    </div>
                    <div class="mt-1 p-2">
                        <h2 class="text-slate-700">{{ item.name }}</h2>
                        <p class="mt-1 text-sm text-slate-400">{{ item.description }}</p>
                        <div class="mt-3 flex items-end justify-between">
                            <p>
                                <span class="text-lg font-bold text-blue-500">{{ item.price }}</span>
                            </p>
                            <div
                                class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <router-link :to="{ path: '/pc/' + item.id, params: id = item.id }">More</router-link>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </div>
    </section>
</template>


