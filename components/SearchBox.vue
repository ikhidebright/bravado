<template>
  <v-text-field
    v-model="searchInput"
    solo
    label="Search"
    prepend-inner-icon="mdi-magnify"
    @input="addSearchQuery()"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    addSearchQuery() {
      setTimeout(() => {
        this.$router.replace({ path: `/search/${this.searchInput}` })
      }, 2500)
    },
  },
}
</script>
