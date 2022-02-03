<template>
  <v-card class="mb-4 user" color="#fafafa">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img :src="user.avatar" class="userImage" />
      </v-col>
      <v-col cols="9">
        <div class="d-flex">
          <span
            class="name mb-n1 pl-5 pt-1"
            v-html="highlightSearchText().name"
          ></span>
          <span
            class="email ml-auto mt-3"
            v-html="highlightSearchText().email"
          ></span>
        </div>
        <small
          class="job mb-n1 pl-5"
          v-html="highlightSearchText().title"
        ></small>
        <p class="address mb-3 pl-5" v-html="highlightSearchText().address"></p>
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
  methods: {
    changeHighlitedTextColor(text) {
      const coloredText = `<span style="background-color: yellow; color: black">${this.$route.params.keyword.toLowerCase()}</span>`
      const regExp = new RegExp(this.$route.params.keyword, 'gi')
      return text.replace(regExp, coloredText)
    },
    highlightSearchText() {
      if (
        this.$route.name === 'search-keyword' &&
        this.$route.fullPath.includes('search')
      ) {
        const nameFormatted = this.changeHighlitedTextColor(this.user.name)
        const addressFormatted = this.changeHighlitedTextColor(
          this.user.address
        )
        const titleFormatted = this.changeHighlitedTextColor(this.user.title)
        const emailFormatted = this.changeHighlitedTextColor(this.user.email)
        return {
          name: nameFormatted,
          address: addressFormatted,
          title: titleFormatted,
          email: emailFormatted,
        }
      }
      return {
        name: this.user.name,
        address: this.user.address,
        title: this.user.title,
        email: this.user.email,
      }
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
