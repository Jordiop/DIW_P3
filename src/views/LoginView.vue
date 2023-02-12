<script>
const loged = "";
function login() {
    let usuario = "";
    let password = "";
    let admins = [];
    usuario = document.getElementById("user").value;
    password = document.getElementById("password").value;
    if (usuario == "admin") {
        fetch("localhost:3000/admin")
            .then(response => response.json())
            .then(data => {
                admins.push(data)
            })
        for (let i = 0; i < admins.length; i++) {
            if (admins.usuario[i] == usuario && password == admins[i].password) {
                window.location.href = "http://localhost:5173/admin"
                loged = sessionStorage.setItem("loged", "admin");
            }
        }
    } else {
        let users = [];
        fetch("localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                users.push(data)
            })
        for (let i = 0; i < users.length; i++) {
            if (users.usuario[i] == usuario && password == users[i].password) {
                window.location.href = "http://localhost:5173/"
                loged = sessionStorage.setItem("loged", "usuario");
            }
        }
    }
}
function register() {

}

</script>
<template>
    <div class="sm:grid sm:grid-cols-2 mt-32">
        <div class="col-span-1 p-4">
            <h1 class="text-4xl mt-8 text-center">Registro</h1>
            <form class="flex flex-col items-center">
                <input id="resiterUser" type="text" placeholder="Username"
                    class="border-2 border-gray-300 p-2 rounded-lg m-2">
                <input id="registerPassword" type="password" placeholder="Password"
                    class="border-2 border-gray-300 p-2 rounded-lg m-2">
                <input id="resgisterRepeat" type="password" placeholder="Confirm Password"
                    class="border-2 border-gray-300 p-2 rounded-lg m-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </form>
        </div>
        <div class="sm:col-span-1 p-4">
            <h1 class="text-4xl mt-8 text-center">Login</h1><br>
            <form class="flex flex-col items-center">
                <input id="user" type="text" placeholder="Username" class="border-2 border-gray-300 p-2 rounded-lg m-2">
                <input id="password" type="password" placeholder="Password"
                    class="border-2 border-gray-300 p-2 rounded-lg m-2">
                <button onclick="login()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </form>
        </div>
    </div>
</template>