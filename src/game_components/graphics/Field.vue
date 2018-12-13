<template>
  <div>
    <VglRenderer ref="konva" id="renderer" antialias class="renderer" >
      <VglScene>
        <VglAmbientLight color="#A5A5A5" />
        <VglDirectionalLight position="- 1 1.75 1" />
        <Matrix ref="matrix" />
        <VglPerspectiveCamera orbit-position="15 1 1;" />
      </VglScene>
    </VglRenderer>
  </div>
</template>

<script>
import Matrix from './Matrix';

export default {
  name: "Field",
  components: {
    Matrix,
  }
}
</script>

<style>
  .renderer, canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>