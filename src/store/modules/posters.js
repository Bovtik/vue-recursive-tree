



const state = {
  posters: [],
  selectedPosterId: null,
  filterBy: {
    city: 'all'
  },
  sortBy: '',
}

const getters = {
  getPosterById: (state) => (posterId) => {
    return state.posters.find(poster => (poster._id == posterId))
  },

  getPostersByCity: (state) => (city) => {
    return state.posters.filter(item => (item.city == city))
  },
}

const mutations = {
  setPosterData(state, dataArray) {
    state.posters = []
    dataArray.forEach(item => {
      state.posters.push(item)
    })
  },
  selectPoster(state, selectedPosterId) {
    state.selectedPosterId = selectedPosterId
  },
  deselectPoster(state) {
    state.selectedPosterId = null
  },
  
  setSortBy (state, sortBy) {
    state.sortBy = sortBy
  },
  setFilter (state, city) {
    state.filterBy.city = city
  }
}

const actions = {
  updatePosterData({ commit }) {
    fetch('/api/posters/getAllPosters/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
    .then(res => res.json())
    .then(data => {
      commit('setPosterData', data);
    });
  },
  selectPoster({ commit }, data) {
    commit('selectPoster', data.id)
  },
  deselectPoster({ commit }) {
    commit('deselectPoster')
  },
  deletePoster({ commit }, data) {
    if (!data.passkey) {
      return false;
    } else {
      fetch('/api/posters/deletePoster/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ passkey: data.passkey })
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  },

  setSortBy({ commit }, param) {
    commit('setSortBy', param)
  },
  setFilter({ commit }, city) {
    commit('setFilter', city)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}