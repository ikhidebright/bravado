<template>
  <v-card class="mb-4 user" color="#fafafa">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img :src="user.avatar" class="userImage" />
      </v-col>
      <v-col cols="9">
        <p class="name mb-n1 pl-5 pt-1">{{ user.name }}</p>
        <small class="job mb-n1 pl-5">{{ user.title }}</small>
        <p class="address mb-3 pl-5">{{ user.address }}</p>
        <div class="pl-8 pt-2 cardActions">
          <nuxt-link to="/">SKIP SELECTION</nuxt-link>
          <!-- <nuxt-link to="/">MARK AS SIUTABLE</nuxt-link> -->
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #009688;
}

.cardActions {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
