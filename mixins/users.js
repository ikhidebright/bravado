export default {
  methods: {
    paginateUsers(users, size = 10) {
      const ableToPaginate = users.length - size
      if (ableToPaginate < 0) {
        return [...users]
      }
      return users.splice(0, size)
    },
  },
}
