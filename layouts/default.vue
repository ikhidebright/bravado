<template>
  <v-app>
    <v-app-bar color="#757575" fixed app tile dense elevation="0">
      <v-spacer />
      <v-btn icon x-small color="white" class="mr-5">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn icon x-small color="white" class="mr-5">
        <v-icon>mdi-checkbox-blank-outline</v-icon>
      </v-btn>
      <v-btn icon x-small color="white">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="bgColor">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app color="#262626">
      <span>
        <img
          src="~/assets/icons/chrome.svg"
          alt="google chrome logo"
          class="mr-4"
        />
        <img
          src="~/assets/icons/gmail.svg"
          alt="google chrome logo"
          class="mr-4"
        />
        <img
          src="~/assets/icons/google.svg"
          alt="google chrome logo"
          class="mr-4"
        />
        <img
          src="~/assets/icons/googledrive.svg"
          alt="google chrome logo"
          class="mr-4"
        />
        <img
          src="~/assets/icons/youtube.svg"
          alt="google chrome logo"
          class="mr-4"
        />
      </span>
      <v-spacer />
      <span class="white--text mr-4 caption">{{ getCurrecntTime }}</span>
      <v-icon color="white" class="mr-4" small>mdi-wifi</v-icon>
      <v-icon color="white" class="mr-4" small>mdi-battery-60</v-icon>
      <v-icon color="white" small>mdi-account-circle</v-icon>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  computed: {
    getCurrecntTime() {
      const date = new Date()
      const hr =
        date.getHours() > 12
          ? `0${date.getHours() - 12}`
          : `0${date.getHours()}`
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM'

      return `${hr}:${date.getMinutes()} ${ampm}`
    },
  },
}
</script>

<style scoped>
.bgColor {
  background-color: #eeeeee;
  overflow: hidden;
}
</style>
