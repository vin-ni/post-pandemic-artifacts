<!-- Please remove this file from your project -->
<template>
  <div>
    <div v-if="showOverlay" class="intro">
      <!-- <p>Allow Camera</p> -->
      <p @click="start">Join Meeting</p>
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
