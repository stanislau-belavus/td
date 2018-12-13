<template>
  <div class='game-zone' >
    <transition appear  name="fade">
      <!-- <Field  v-show="!showControl" /> -->
      <Field  v-show="showControl" />
    </transition>
    
    <!-- <transition appear name="expand">
      <GameControls v-show="showControl" :onStart="startGame" />
    </transition> -->
    
  </div>
</template>

<script>
import GameControls from './GameControls';
import Field from './graphics/Field';

export default {
  name: "GameZone",
  data: () => ({
    showControl: true,
  }),
  components: {
    GameControls,
    Field,
  },
  methods: {
    startGame() {
      this.showControl = false;
      console.log(this.showControl);
    }
  }
}
</script>

<style scoped>
  .game-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    /* background: #108dc7;
    background: -webkit-linear-gradient(to right, #ef8e38, #0b0c0c); */
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }

  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .expand-enter {
    opacity: 0;
  }

  .expand-enter-active {
    transition: opacity 2s ease-out;
  }

  .expand-enter-to {
    opacity: 1;
  }

  .expand-leave-active {
    transition: width .5, height .5;
    animation: folding 2s;
  }

  @keyframes folding {
  0% {
    height: 145px;
    width: 300px;
  }
  50% {
    width: 0;
    height: 145px;
  }
  100% {
    width: 0;
    height: 0;
  }
}
</style>

