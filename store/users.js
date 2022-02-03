export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, payload) {
    state.users = payload
  },
}

export const getters = {
  searchUsers: (state) => (userQuery) => {
    return state.users.filter((item) => {
      return (
        item.name.toLowerCase().includes(userQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(userQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(userQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(userQuery.toLowerCase())
      )
    })
    // return searchedUsers
  },
}
