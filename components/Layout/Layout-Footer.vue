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
