<script>
const url = "http://localhost:3000/users"
// Login methods
export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Login method
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].username == this.username && data[i].password == this.password) {
                            this.$router.push('/')
                            // Set username in local storage
                            localStorage.setItem('username', this.username)
                        }
                    }
                })
        }
    }
}

</script>
<template>
    <!--Login form-->
    <div class="border border-black rounded-lg mt-20 w-fit">
        <form class="flex flex-col p-4">
            <label for="email">Username</label>
            <input type="email" class="" id="email" placeholder="Enter username">
            <label for="password">Password</label>
            <input type="password" class="" id="password" placeholder="Password">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
    </div>
</template>