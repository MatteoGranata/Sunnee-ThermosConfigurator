<template>
  <div class="overflow">
    <div class="container">
      <div class="thanks-title">
        <h1>
          THANKS YOU SO MUCH
        </h1>
      </div>
      <div class="thanks-container">
        <div class="thanks">
          <p>
            Thank you for choosing Sunnee's Kids line and for being part of our sustainability mission. With your
            support, we are helping to protect the oceans and educate future generations about the importance of
            recycling and environmental conservation. Your customized thermal bottle is currently being prepared and
            will soon be ready for shipment. Keep following Sunnee on our social channels to stay updated on new offers,
            initiatives, and tips for a sustainable lifestyle. Thanks again for being a valuable member of the Sunnee
            family! <br>
            Stay sunny.
          </p>
        </div>
      </div>
      <!-- summary that tells the user all the colors chosen -->
      <div class="summary">
        <h2>Summary of choices:</h2>
        <div class="cap">
          <p>
            Cap:
          </p>
          <div class="color" :style="{ background: $route.query.capColor }">
            <p>
              {{ $route.query.capColor }}
            </p>
          </div>
        </div>
        <div class="body">
          <p>
            Body:
          </p>
          <div class="color" :style="{ background: $route.query.bodyColor }">
            <p>
              {{ $route.query.bodyColor }}
            </p>
          </div>
        </div>
        <div class="bottom">
          <p>
            Bottom:
          </p>
          <div class="color" :style="{ background: $route.query.bottomColor }">
            <p>
              {{ $route.query.bottomColor }}
            </p>
          </div>
        </div>
        Have you changed your mind?
        <router-link to="/step1" class="link">Click me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // function that refers to the first step in case of failure to send data
  mounted() {
    if (!this.$route.query.capColor || !this.$route.query.bodyColor || !this.$route.query.bottomColor) {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.thanks-title {
  position: relative;
  top: -10vw;
  left: 4rem;
  width: 90vw;
  font-size: 6vw;
}

.thanks-container {
  display: flex;
  position: relative;
  top: -20vw;
  width: 100%;
  justify-content: flex-start;
}

.thanks {
  margin: 0 4rem;
  display: flex;
  width: 67vw;
  align-items: start;
  font-size: 2vw;
}

.summary {
  width: 40px;
  position: relative;
  bottom: 20vw;
  left: 4rem;
  font-size: 1.3vw;
  padding-bottom: 4rem;
  width: 80vw;
}

.cap,
.body,
.bottom {
  display: flex;
}

.color {
  display: flex;
  align-items: center;
  align-self: center;
  border-radius: 5px;
  height: 2vh;
  width: fit-content;
  text-transform: uppercase;
  text-align: center;
  margin-left: 1rem;
}

@media (max-width: 980px) {
  .overflow {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .thanks,
  .summary {
    font-size: 4.5vw;
    width: 100%;
    left: 4vw;
  }

  .thanks {
    margin-left: 4vw;
    margin-right: 0;
  }
}
</style>