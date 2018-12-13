<template>
  <div
    id="timeline"
    @click="changeMode"
    class="time"
    :class="[{ preview: isPreview }]"
    ref="timeline"
  >
      <div v-if='isLoading' >LOADER...</div>
      <div v-else >{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    msg: String
  },
  data: vm => ({
    isLoading: false,
    isPreview: false,
  }),
  methods: {
    changeMode: function() {
      this.isPreview = !this.isPreview;
    }
  }
}
</script>

<style scoped>
  .time {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #a5a5a5;
    user-select: none;
    margin: auto;
    height: 30px;
    width: 250px;
    transition: width 2s ease-in, height 2s;
  }

  .preview {
    animation: spinning 2s forwards;
  }

  @keyframes spinning {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      width: 500px;
      height: 500px;
      transform: rotateZ(720deg);
    }
  }
</style>