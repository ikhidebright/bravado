<template>
  <v-row justify="center" align="center" class="fullCard">
    <v-col cols="12" sm="12" md="6">
      <v-card tile flat class="justify-center pa-3 pr-5">
        <SearchBox />
        <v-row v-if="usersToDisplay.length > 0" class="users">
          <v-col v-for="(user, index) in usersToDisplay" :key="index" cols="12">
            <UserCard :user="user" />
          </v-col>
          <v-btn
            v-if="showMoreButton > 0"
            tile
            color="primary"
            class="mx-auto mb-5"
            @click="loadMore()"
            >Load More</v-btn
          >
        </v-row>
        <p v-else>
          Sorry no users match your search "{{ $route.params.keyword }}"
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import users from '../../db/users'
import usersMixins from '../../mixins/users'

export default {
  name: 'SearchIndex',
  mixins: [usersMixins],
  data() {
    return {
      pageSize: 0,
      usersToDisplay: [],
      searchedUsers: [],
    }
  },
  fetch() {
    this.setUsers(users)
    this.searchedUsers = this.$store.getters['users/searchUsers'](
      this.$route.params.keyword
    )
    // console.log('searchedUsers', this.searchedUsers)
    this.pageSize = 10
  },

  computed: {
    ...mapState('users', ['users']),
    showMoreButton() {
      return this.searchedUsers.length - this.usersToDisplay.length
    },
  },
  watch: {
    '$route.params.keyword'(v) {
      this.$fetch()
    },
    pageSize(v) {
      if (this.searchedUsers.length < 0) {
        this.usersToDisplay = []
        return
      }
      const users = [...this.searchedUsers]
      this.usersToDisplay = this.paginateUsers(users, v)
    },
  },
  methods: {
    ...mapMutations('users', ['setUsers']),
    loadMore(e) {
      this.pageSize += 10
    },
  },
}
</script>

<style scoped>
.users {
  height: 65vh;
  overflow-x: scroll;
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  width: 0px;
  height: 608px;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0e0d0d;
}
</style>
