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
    // const searchedUsers = []
    return state.filter((item) => {
      return (
        item.name.toLowerCase().includes(userQuery) ||
        item.email.toLowerCase().includes(userQuery) ||
        item.title.toLowerCase().includes(userQuery) ||
        item.address.toLowerCase().includes(userQuery)
      )
    })
    // return searchedUsers
  },
}
