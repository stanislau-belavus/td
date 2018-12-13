<template>
  <div class="zone" ref="zone" >
    <Hexagon
      v-for="(name, index) in zones"
      :name="name"
      :index="index"
      :key="index"
      :count="count"
    />
  </div>
</template>

<script>
import Hexagon from './Hexagon.vue'
export default {
  name: 'HexZone',
  components: {
    Hexagon,
  },
  data: () => ({
    count: 0
  }),
  props: {
    zones: {
      type: Array,
      default: () => [
        'sandiego.jpg',
        'baniff.jpg',
        'barrow.jpg',
        'sandiego.jpg',
        'baniff.jpg',
        'barrow.jpg',
        'sandiego.jpg',
        'baniff.jpg',
        'barrow.jpg',
        'sandiego.jpg',
        'baniff.jpg',
        'barrow.jpg',
        'sandiego.jpg',
        'baniff.jpg',
        'barrow.jpg',
      ],
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  mounted() {
    const { clientWidth } = this.$refs.zone;
    const sizeHex = 300;

    this.count = Math.round(clientWidth / sizeHex);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if(this.$refs.zone) {
        
      }
    }
  }
};
</script>

<style scoped>
  .zone {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 40px auto;
    width: 90%;
  }
</style>