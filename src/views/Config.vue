<template>
  <div class="config-container">
    <!-- router view to render the steps and receive the data -->
    <router-view :key="$route.fullPath" @color-selected="handleColorSelected"></router-view>
    <!-- buttons to go to the next step or go back -->
    <div class="btn-container">
      <button class="btn-prev" v-if="step > 1" @click="prevStep">BACK</button>
      <button class="btn-next" v-if="step < 3" @click="nextStep">NEXT</button>
      <button class="btn-submit" v-if="step === 3" @click="submit">SEND</button>
    </div>
    <!-- images of the individual parts of the thermos that are colored based on the user's choices -->
    <div class="preview-container">
      <div class="preview">
        <img class="thermos-background" src="../assets/img/background-without-thermos.png">
        <img class="thermos-cap" :style="{ backgroundColor: capColor }" src="../assets/img/thermos-cap.png">
        <img class="thermos-body" :style="{ backgroundColor: bodyColor }" src="../assets/img/thermos-body.png">
        <img class="thermos-bottom" :style="{ backgroundColor: bottomColor }" src="../assets/img/thermos-bottom.png">
        <img class="logo" src="../assets/img/Logo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      // default part colors
      capColor: `${'none'}`,
      bodyColor: `${'none'}`,
      bottomColor: `${'none'}`,
    };
  },
  methods: {
    // function to go to the next step
    nextStep() {
      this.step++;
      this.$router.push({ name: `step${this.step}` });
    },
    // function to go to the prev step
    prevStep() {
      this.step--;
      this.$router.push({ name: `step${this.step}` });
    },
    // function to receive colors from steps
    handleColorSelected(color) {
      if (this.step === 1) this.capColor = color;
      else if (this.step === 2) this.bodyColor = color;
      else if (this.step === 3) this.bottomColor = color;
    },
    // function to send the data and pass to the Thanks.vue component
    submit() {
      const colorsData = {
        capColor: this.capColor,
        bodyColor: this.bodyColor,
        bottomColor: this.bottomColor
      };
      this.$router.push({ path: '/thanks', query: colorsData });
    }
  },
}
</script>

<style>
.config-container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.preview-container {
  position: relative;
  right: 0;
}

.preview {
  display: flex;
  background: white;
  height: 100%;
}

.thermos-cap {
  height: fit-content;
  width: 52vw;
  z-index: 1;
  mix-blend-mode: multiply;
}

.thermos-body {
  position: absolute;
  top: 0;
  left: 0;
  width: 52vw;
  z-index: 0;
  mix-blend-mode: multiply;
}

.thermos-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 52vw;
  mix-blend-mode: multiply;
  z-index: 2;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  mix-blend-mode: screen;
}

.thermos-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}

.btn-container {
  position: absolute;
  top: 77vh;
  left: 6vw;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  width: 35vw;
  height: fit-content;
}

.btn-next,
.btn-prev,
.btn-submit {
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  background: rgb(255, 255, 255);
  border: none;
  border-radius: 10px;
}

@media (max-width: 980px) {
  .config-container {
    flex-direction: column-reverse;
  }

  .preview-container {
    position: relative;
    top: -20vw
  }

  .thermos-cap,
  .thermos-body,
  .thermos-bottom {
    width: 180vw;
  }

  .btn-container {
    top: 92vh;
    left: 0;
    margin: 0 5vw;
    width: 90vw;
  }
}
</style>