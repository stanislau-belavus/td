<template>
  <div class="home">
    <GameZone />
  </div>
</template>

<script>
import GameZone from '@/game_components/GameZone.vue';

export default {
  name: 'home',
  components: {
    GameZone,
  }
}
</script>

<style scoped>
  .home {
    height: 100%;
  }
</style>

