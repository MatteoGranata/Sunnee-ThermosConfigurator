<script>
export default {
  data() {
    return {
      colors: ['red', 'greenyellow', 'green', 'yellow', 'orange', 'magenta', 'pink', 'aqua', 'white', 'gray'],
    };
  },
  methods: {
    selectColor(color) {
      this.$emit('color-selected', color);
    }
  }
}
</script>

<template>
  <div class="step-container">
    <h2 class="text">Cap color:</h2>
    <div class="color-container">
      <button v-for="color in colors" :key="color" @click="selectColor(color)" :style="{ backgroundColor: color }"
        class="color-option">
      </button>
    </div>
  </div>
</template>


<style>
.color-option {
  width: 7vh;
  height: 7vh;
  display: inline-block;
  margin: 2rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}

.step-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  z-index: 8;
}

.color-container {
  display: grid;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  grid: repeat(2, 8vw) / auto-flow auto;
  height: fit-content;
}

.text {
  font-size: 3vw;
  text-transform: uppercase;
}

@media (max-width: 980px) {

  .text {
  font-size: 6vw;
}
  .color-option {
    width: 5vh;
    height: 5vh;
  }

  .step-container {
    position: absolute;
    bottom: 3.3rem;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: 8;
  }

  .color-container {
    display: grid;
    position: relative;
    left: -5vw;
    align-items: center;
    justify-content: space-evenly;
    grid: repeat(2, 10vh) / auto-flow  17vw;
  }
}
</style>
