<!-- Please remove this file from your project -->
<template>
  <div>
    <div v-if="showOverlay" class="intro">
      <!-- <p>Allow Camera</p> -->
      <p>Die Zwölf Apostel</p>
      <p class="link-btn" @click="start">Join Meeting</p>
      <p></p>
    </div>
    <Zoom ref="zoom" />
  </div>
</template>

<script>
export default {
  name: 'LandingPageComponent',
  props: {},
  data() {
    return {
      cameraAllowed: false,
      showOverlay: true,
    }
  },
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    start() {
      this.$refs.zoom.start()
      this.showOverlay = false
    },
  },
}
</script>
