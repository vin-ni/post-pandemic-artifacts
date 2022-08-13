<!-- Please remove this file from your project -->
<template>
  <div>
    <div v-if="showOverlay" class="intro">
      <!-- <p>Allow Camera</p> -->
      <p>Die Zwölf Apostel</p>
      <p v-if="!videosLoaded">loading {{ loadedVideosInterface }}/12</p>
      <p v-else class="link-btn" @click="start">Join Meeting</p>
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
      loadedVideosInterface: 0,
      cameraAllowed: false,
      showOverlay: true,
      videosLoaded: false,
    }
  },
  computed: {},
  mounted() {
    this.$refs.zoom.preloadVideos()
  },
  destroyed() {},
  methods: {
    start() {
      this.$refs.zoom.start()
      this.showOverlay = false
    },
  },
}
</script>
