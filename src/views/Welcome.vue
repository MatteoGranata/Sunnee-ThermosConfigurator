<template>
  <div class="container-thermos">
    <div class="thermos">
      <img src="../assets/img/thermos.png" alt="">
    </div>
  </div>
  <div class="container">
    <div class="title-container">
      <div class="title">
        <h1>
          SUNNEE
        </h1>
      </div>
    </div>
    <div class="description-container1">
      <div class="description">
        <p>
          Sunnee is proud to present its new Kids line, created with innovative materials made from plastic waste from
          the seas. With our commitment to sustainability, we aim to inspire young minds to become stewards of the
          environment from an early age. With every order, you will receive a complimentary thermal bottle, a small
          gesture to teach children the importance of recycling and responsible resource use.
        </p>
      </div>
    </div>
    <div class="description-container2">
      <div class="description">
        <p>
          Configure your personalized thermal bottle and bring Sunnee's sustainability message with you wherever you go.
          Choose from a wide range of colors and fun designs, perfect for engaging children on the journey towards a
          greener future. Start now and make a difference with Sunnee! <br>
          <router-link to="/step1" class="link">Start</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #FFDEAD;
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
}

.container-thermos {
  position: absolute;
  left: 0;
  top: -10vw;
  z-index: -1;
}

.thermos img {
  width: 100%;
  height: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 10vh;
  margin: 0;
  padding: 0;
}

.title-container {
  position: relative;
  bottom: 20vw;
  width: 100%;
  z-index: -2;
}

.title {
  text-align: center;
  font-size: 11vw;
}

.description-container1,
.description-container2 {
  display: flex;
  position: relative;
  top: -40vw;
  width: 100%;
}

.description-container1 {
  justify-content: flex-start;
}

.description-container2 {
  text-align: end;
  justify-content: flex-end;
}

.description {
  margin: 0 4rem;
  display: flex;
  width: 30vw;
  align-items: start;
  font-size: 3vh;
}

.link {
  border: 1px solid rgb(88, 130, 79);
  border-radius: 10px;
  background-color:rgb(245, 245, 245);
  color: rgb(88, 130, 79);
  text-decoration:none;
  font-weight: 500;
  padding:.1rem .5rem .1rem .5rem;
  text-transform: uppercase;
}

@media (max-width: 980px) {

  .description-container1,
  .description-container2 {
    display: flex;
    position: relative;
    top: 0;
    width: 100%;
    justify-content: center;
  }

  .description {
    margin: 0 2rem;
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>