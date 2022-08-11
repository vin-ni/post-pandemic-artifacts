<!-- Please remove this file from your project -->
<template>
  <div class="zoom-component">
    <div class="video-wrapper">
      <div ref="vidwrap-id-0" class="video-card">
        <video ref="vid-id-0" src=""></video>
      </div>
      <div ref="vidwrap-id-1" class="video-card">
        <video ref="vid-id-1" src=""></video>
      </div>
      <div ref="vidwrap-id-2" class="video-card">
        <video ref="vid-id-2" src=""></video>
      </div>
      <div ref="vidwrap-id-3" class="video-card">
        <video ref="vid-id-3" src=""></video>
      </div>
      <div ref="vidwrap-id-4" class="video-card">
        <video ref="vid-id-4" src=""></video>
      </div>
      <div ref="vidwrap-id-5" class="video-card">
        <video ref="vid-id-5" src=""></video>
      </div>
      <div ref="vidwrap-id-6" class="video-card">
        <video ref="vid-id-6" src=""></video>
      </div>
      <div ref="vidwrap-id-7" class="video-card">
        <video ref="vid-id-7" src=""></video>
      </div>
      <div ref="vidwrap-id-8" class="video-card">
        <video ref="vid-id-8" src=""></video>
      </div>
      <div ref="vidwrap-id-9" class="video-card">
        <video ref="vid-id-9" src=""></video>
      </div>
      <div ref="vid-wrapid-10" class="video-card">
        <video ref="vid-id-10" src=""></video>
      </div>
      <div ref="vid-wrapid-11" class="video-card">
        <video ref="vid-id-11" src=""></video>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="left"><img src="/left.png" alt="" /></div>
      <div class="middle"><img src="/icons.png" alt="" /></div>
      <div class="right"><img src="/right.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
import playlist from '~/assets/js/playlist.json'
export default {
  name: 'ZoomComponent',
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.setupVideos()
    this.addCamera()
  },
  destroyed() {},
  methods: {
    setupVideos() {
      const keys = Object.keys(playlist.videos)
      for (let i = 0; i < keys.length; i++) {
        const element = playlist.videos[keys[i]]

        // create video
        const refString = `vid-id-${keys[i]}`
        this.$refs[refString].src = `${playlist.root}${element.src}`
      }
    },
    addCamera() {
      const that = this

      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then((stream) => {
          that.$refs['vid-id-5'].srcObject = stream
          that.$refs['vid-id-5'].play()
          // this._videoEl.play();
        })
        .catch((err) => {
          console.log(err)
        })
    },

    start() {
      const keys = Object.keys(playlist.videos)
      for (let i = 0; i < keys.length; i++) {
        const refString = `vid-id-${keys[i]}`
        this.$refs[refString].play()
      }
    },
  },
}
</script>
