
export const location = {
  get: (id, def = null) => {
    const search = new URLSearchParams(window.location.search)
    return search.get(id) || def
  },
}
