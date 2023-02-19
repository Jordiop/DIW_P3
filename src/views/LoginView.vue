<script>
import VueCookies from 'vue-cookies';
const user = "";
export default {
    name: "LoginView",
    data() {
        return {
            user: "",
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            fetch("http://localhost:3000/users")
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].email == this.email && data[i].password == this.password) {
                            alert("Bienvenido " + data[i].email)
                            VueCookies.set("user", data[i].email)
                            window.location.href = "http://localhost:5173"
                        } else {
                            alert("Usuario o contraseña incorrectos")
                        }
                    }
                })
        }
    },
    computed: {
        loggedIn() {
            return Vue.$cookies.get("user")
        }
    }
}

</script>
<template>
    <!--Login-->
    <div class="mt-20 mb-4 flex justify-center">
        <form @submit.prevent="login()" class="border border-black rounded-lg">
            <div class="flex flex-col">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" name="email" placeholder="Email">
            </div>
            <div class="flex flex-col">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" name="password" placeholder="Contraseña">
            </div>
            <div class="flex flex-col p-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Iniciar sesión</button>
            </div>
        </form>
    </div>
</template>