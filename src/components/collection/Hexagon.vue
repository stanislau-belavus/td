<template>
    <div
      class="hexagon"
      :class="[{ marginTop: isMarginTop, marginRight: isMarginRight }]"
    >
      <div class="hex-out">
        <div class="hex-inner">
          <img
            class="hex-image"
            :src="`${baseUrl}images/${name}`"
          />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Hexagon',
  props: {
    name: String,
    index: Number,
    count: Number,
  },
  data: vm => ({
    baseUrl: process.env.BASE_URL,
  }),
  computed: {
    isMarginTop: vm => vm.index >= vm.count,
    isMarginRight: vm => vm.index > 0 && vm.index % (vm.count * 2) === vm.count 
  },
};
</script>

<style scoped>
  
  .hex-image {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .hexagon, .hexagon div {
    margin: 0 0;
    transform-origin: 50% 50%;
    overflow: hidden;
    width: 320px;
    height: 320px;
  }

  .hexagon {
    width: 270px;
    height: 320px;
    transform: rotate(60deg);
  }

  .hexagon div {
    width: 100%;
    height: 100%;
  }

  .hex-out {
    transform: rotate(60deg);
  }
  .hex-inner {
    transform: rotate(-120deg);
  }

  /* .marginTop {
    margin-top: -82px;
  }
  .marginRight {
    margin-left: 220px;
  } */
</style>