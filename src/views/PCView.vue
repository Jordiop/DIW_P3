<template>
    <body>
        <div></div>
        <div><Recommended></Recommended></div>
    </body>
</template>
<script>
    import Recommended from "@/components/Recommended.vue";
    export default {
        components: {
            Recommended
        }
    } 

    function getPC() {
        fetch('http://localhost:3000/pc')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

</script>