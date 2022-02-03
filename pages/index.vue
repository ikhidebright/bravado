<template>
  <v-row justify="center" align="center" class="fullCard">
    <v-col cols="12" sm="12" md="6">
      <v-card tile flat class="justify-center pa-3 pr-5">
        <SearchBox />
        <v-row class="users">
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import users from '../db/users'
import usersMixins from '../mixins/users'

export default {
  name: 'IndexPage',
  mixins: [usersMixins],
  data() {
    return {
      pageSize: 0,
      usersToDisplay: [],
    }
  },
  fetch() {
    this.setUsers(users)
    this.pageSize = 10
  },
  computed: {
    ...mapState('users', ['users']),
    showMoreButton() {
      return this.users.length - this.usersToDisplay.length
    },
  },
  watch: {
    pageSize(v) {
      const users = [...this.users]
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
