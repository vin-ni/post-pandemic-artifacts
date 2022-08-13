<!-- Please remove this file from your project -->
<template>
  <div class="zoom-component">
    <div class="video-wrapper">
      <div ref="vidwrap-id-0" class="video-card">
        <video ref="vid-id-0" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-1" class="video-card">
        <video ref="vid-id-1" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-2" class="video-card">
        <video ref="vid-id-2" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-3" class="video-card">
        <video ref="vid-id-3" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-4" class="video-card">
        <video ref="vid-id-4" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-5" class="video-card">
        <video ref="vid-id-5" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-6" class="video-card">
        <video ref="vid-id-6" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-7" class="video-card">
        <video ref="vid-id-7" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-8" class="video-card">
        <video ref="vid-id-8" preload="auto" src=""></video>
      </div>
      <div ref="vidwrap-id-9" class="video-card">
        <video ref="vid-id-9" preload="auto" src=""></video>
      </div>
      <div ref="vid-wrapid-10" class="video-card">
        <video ref="vid-id-10" preload="auto" src=""></video>
      </div>
      <div ref="vid-wrapid-11" class="video-card">
        <video ref="vid-id-11" preload="auto" src=""></video>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="left"><img src="~/static/left.png" alt="" /></div>
      <div class="middle"><img src="~/static/icons.png" alt="" /></div>
      <div class="right"><img src="~/static/right.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
import playlist from '~/assets/js/playlist.json'
export default {
  name: 'ZoomComponent',
  props: {},
  data() {
    return {
      videosLoaded: 0,
      startedExperience: false,
    }
  },
  computed: {},
  mounted() {
    this.setupVideos()
    this.addCamera()
    console.log(this.$parent.videosLoaded)
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
        this.$refs[refString].addEventListener('ended', (event) => {
          this.videoLoaded()
        })
      }
    },
    videoLoaded() {
      if (!this.startedExperience) {
        this.videosLoaded++
        this.$parent.videosLoaded = this.videosLoaded
        this.checkAllLoaded()
      }
    },
    checkAllLoaded() {
      if (this.videosLoaded === 11) {
        this.$parent.videosLoaded = true
        this.startedExperience = true
      }
    },
    addCamera() {
      const that = this

      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1280, height: 720, facingMode: 'user' },
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
        this.$refs[refString].muted = false
        this.$refs[refString].currentTime = 0
        this.$refs[refString].play()
        this.$refs[refString].playbackRate = 1
      }
    },

    preloadVideos() {
      const keys = Object.keys(playlist.videos)
      for (let i = 0; i < keys.length; i++) {
        const refString = `vid-id-${keys[i]}`
        this.$refs[refString].muted = true
        this.$refs[refString].play()
        this.$refs[refString].playbackRate = 10
      }
    },
  },
}
</script>
