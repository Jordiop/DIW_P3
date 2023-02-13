<script>

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