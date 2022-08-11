<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      v-for="project in cmsdata.landing.landingProjects"
      :key="project.title"
      class="project-wrapper"
    >
      <div class="inner">
        <div
          v-if="project.landingVisuals.highlightVisual.length <= 1"
          class="project-visual"
        >
          <ImageComponent
            v-if="!isVideo(project.landingVisuals.highlightVisual[0])"
            :image="project.landingVisuals.highlightVisual[0].image"
            :show-border="project.landingVisuals.highlightVisual[0].showBorder"
            :zoom="false"
          />
        </div>
        <div v-else>
          <p>Multicomponent for many images or videos not added yet.</p>
        </div>

        <div class="description">
          <p class="title">
            <!-- {{ project.title }} ({{ getYear(project.release.date) }}) -->
          </p>
          <SanityBlocks class="blocks" :blocks="project.projectDescription" />
        </div>
      </div>

      <!-- {{ project.title }}
      {{ project.slug.current }} -->
      <!-- {{ project.projectDescription }} -->
      <!-- {{ project.landingVisuals.highlightVisual }} -->
    </div>
    <div class="spacer-bottom"></div>
    <footer>
      <nuxt-link :to="`/imprint`">imprint</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPageComponent',
  props: {
    cmsdata: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription,
        },
        // Twitter Card data
        {
          name: 'twitter:title',
          content: this.metaTitle,
          hid: 'va',
        },
        {
          name: 'twitter:description',
          content: this.metaDescription,
          hid: 'va',
        },
        { name: 'twitter:image', content: this.metaImage },
        // Open Graph
        { property: 'og:title', content: this.metaTitle, hid: 'va' },
        {
          property: 'og:description',
          content: this.metaDescription,
          hid: 'og:description',
        },
        { property: 'og:image', content: this.metaImage, hid: 'og:image' },
      ],
    }
  },
  computed: {
    // ========== META ========== //
    metaTitle() {
      return this.cmsdata.generalMeta.meta.title.en || ''
    },
    metaDescription() {
      return this.cmsdata.generalMeta.meta.description.en || ''
    },
    metaImage() {
      return (
        this.$urlFor(this.cmsdata.generalMeta.meta.ogImage.en)
          .fit('crop')
          .size(1200, 630)
          .format('png')
          .quality(95) || ''
      )
    },
  },
  mounted() {
    console.log(this.cmsdata)
  },
  destroyed() {},
  methods: {
    getYear(sanityDateString) {
      return sanityDateString.substring(0, 4)
    },
    isVideo(item) {
      try {
        return item._type.toLowerCase().includes('video')
      } catch (error) {
        console.log(error)
        console.log('isVideo errored')
        return false
      }
    },
  },
}
</script>
