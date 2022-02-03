<template>
  <v-app>
    <LayoutHeader />
    <v-main class="bgColor">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <LayoutFooter />
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
