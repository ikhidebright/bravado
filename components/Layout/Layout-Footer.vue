<template>
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
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    getCurrecntTime() {
      const date = new Date()
      const hr =
        date.getHours() - 12 > 10
          ? `${date.getHours() - 12}`
          : `0${date.getHours()}`
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM'

      return `${hr}:${date.getMinutes()} ${ampm}`
    },
  },
}
</script>
