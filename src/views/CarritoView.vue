<template>
    <div class="mt-16 p-4 border border-black">
        <div class="">
            <h2 class="text-2xl">Carrito</h2>
            <div class="flex flex-col">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <p class="text-xl">Nombre</p>
                        <p class="text-xl">Precio</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xl">Cantidad</p>
                        <p class="text-xl">Total</p>
                    </div>
                </div>
                <div class="flex flex-row justify-between" v-for="item in items">
                    <div class="flex flex-col"> 
                        <p class="text-xl">{{ item.name }}</p>
                        <p class="text-xl">{{ item.price }}</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xl">{{ item.quantity }}</p>
                        <p class="text-xl">{{ item.total }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueCookies from 'vue-cookies';

//username
export default {
    name: "CarritoView",
    data() {
        return {
            items: [],
            total: 0
        }
    },
    methods: {
        getItems() {
            fetch("http://localhost:3000/users") 
                .then(response => response.json())
                .then(data => {
                    this.items = data
                    VueCookies.get('username')
                    for(let i = 0; i < this.items.length; i++) {
                        if(this.items[i].email == VueCookies.get('username')) {
                            this.items = this.items[i].cart
                        }
                    }   
                })
        }
    },
    mounted() {
        this.getItems()
    }
}
</script>