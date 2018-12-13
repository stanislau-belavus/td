<template>
  <button
    class="btn"
    :class="inputClasses"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'warning', 'success', 'error'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'normal',
      validator: value => ['small', 'normal', 'large'].indexOf(value) !== -1
    }
  },
  computed: {
    inputClasses: vm => [vm.size, vm.type]
  },
}
</script>

<style scoped>
  .btn {
    color: #9c9c9c;
    border: 2px solid #9c9c9c;
    border-radius: 15px;
    outline: none;
    font-weight: bold;
    overflow: hidden;
  }

  .btn:hover {
    background-color: #f5f5f5;
  }

  .btn:active {
    background-color: #ebe8e8;
  }

  .normal {
    font-family: Lato,'Helvetica Neue', Arial,Helvetica,sans-serif;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px 16px;
    width: auto;
  }
</style>
