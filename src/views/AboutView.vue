<template>
  <div class="grid grid-cols-2 mt-20">
    <!--Upload your build-->
    <div>
      <form class="flex flex-col p-8">
        <label for="procesador">Procesador</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="procesador" name="procesador"
          placeholder="Procesador" />
        <label for="placaBase">Placa Base</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="placaBase" name="placaBase"
          placeholder="Placa Base" />
        <label for="memoriaRAM">Memoria RAM</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="memoriaRAM" name="memoriaRAM"
          placeholder="Memoria RAM" />
        <label for="tarjetaGrafica">Tarjeta Grafica</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="tarjetaGrafica" name="tarjetaGrafica"
          placeholder="Tarjeta Grafica" />
        <label for="discoDuro">Disco Duro</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="discoDuro" name="discoDuro"
          placeholder="Disco Duro" />
        <label for="fuenteAlimentacion">Fuente de Alimentación</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="fuenteAlimentacion"
          name="fuenteAlimentacion" placeholder="Fuente de Alimentación" />
        <label for="caja">Caja (url)</label>
        <input class="border-2 border-gray-300 p-2 rounded-lg m-2" type="text" id="caja" name="caja"
          placeholder="Caja" />
      </form>
    </div>
    <div class="flex justify-center">
      <h1 class="text-xl bold">Builds de otros usuarios</h1>
    </div>
  </div>
  <Builds></Builds>
</template>
<script setup>
  import Builds from '../components/Builds.vue';
</script>

