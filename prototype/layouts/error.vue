<template>
  <div class="container">
    <div class="content-wrapper">
      <!-- <p>sfgsdf</p> -->
      <!-- <p v-if="error.statusCode === 404"><strong>Page not found</strong></p>
      <p v-else>An error occurred</p> -->
      <img src="/hustleloop.gif" alt="me spinning" />

      <p>
        Sorry! You seem to be lost. <br />
        Go back <nuxt-link to="/">home</nuxt-link>.
        <a href="https://or-dures.tumblr.com/" target="_blank">Or-dures</a> if
        you're bored.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  // background-color: blue;

  .content-wrapper {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 90%;
      max-width: 600px;
      margin-bottom: 24px;
    }
  }
}

/*==========  Non-Mobile First Method  ==========*/
/*Above */
@media only screen and (min-width: 1201px) {
}

/* Large Devices, Wide Screens */
@media only screen and (max-width: 1200px) {
}

/* Medium Devices, Desktops */
@media only screen and (max-width: 992px) {
}

/* Small Devices, Tablets */
@media only screen and (max-width: 768px) {
}

/* Extra Small Devices, Phones */
@media only screen and (max-width: 480px) {
}

/* Custom, iPhone Retina */
@media only screen and (max-width: 320px) {
}
</style>
<script>
export default {
  layout: 'default',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
