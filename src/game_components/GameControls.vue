<template>
  <div class='container' >
    <Button :text="$t('start')" :onClick="onStart" />
    <Button :text="$t('exit')" :onClick="onExit" />
  </div>
</template>

<script>
import Button from "@/game_components/shared/Button";

export default {
  name: "GameControls",
  props: {
    onStart: {
      type: Function,
      required: true,
    },
    onExit: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
  .container {
    overflow: hidden;
    height: 145px;
    width: 300px;
    display: flex;
    position: absolute;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, .5);
  }

  .container > button {
    width: 80%;
    margin: 15px auto;
  }
</style>

