<script>
export default {
  data() {
    return {
      colors: ['red', 'greenyellow', 'green', 'yellow', 'orange', 'magenta', 'pink', 'aqua', 'white', 'gray'],
    };
  },
  methods: {
    // function to send data to Config
    selectColor(color) {
      this.$emit('color-selected', color);
    }
  }
}
</script>

<template>
  <div class="step-container">
    <h2 class="text">Body color:</h2>
    <div class="color-container">
      <button v-for="color in colors" :key="color" @click="selectColor(color)" :style="{ backgroundColor: color }"
        class="color-option">
      </button>
    </div>
  </div>
</template>