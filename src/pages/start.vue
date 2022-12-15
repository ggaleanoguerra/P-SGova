<template>
  <div>
    <h3 text-xs-center id="title_1">Pensamiento espacial</h3>
    <h3>&</h3>
    <h3>Sistemas geométricos</h3>

    <btn
      to="layout"
      id="button"
      plain
      color="#1b1c1c"
      class="animate__animated animate__fadeIn animate__delay-1s"
    >
      <button id="play-video" class="video-play-button">
        <span></span>
      </button>
    </btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
<style scoped>
#title_1 {
  margin-top: 17%;
}
#app {
  background-image: url("../assets/backgrounds/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

h3 {
  color: white;
  font-family: "Rubik Distressed";
  text-align: center;
  font-size: 3vw;
  line-height: 0;
  margin-top: 13%;
  margin-right: 3%;
}

#button {
  background-color: transparent;
  width: 5%;
  height: 6%;
  font-size: 1.2vw;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 16%;
  margin-left: 47%;
}

.video-play-button {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 31px;
  height: 44px;
  /* background: #fa183d; */
  border-radius: 40%;
  padding: 18px 20px 18px 28px;
}

.video-play-button:before {
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
  background: #ba1f24;
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video-play-button:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
  background: #fa183d;
  border-radius: 50%;
  transition: all 200ms;
}

.video-play-button span {
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 32px solid #fff;
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}
</style>
