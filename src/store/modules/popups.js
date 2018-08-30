const state = {
  popupIsShown: false,
  popupState: {
    CreatePosterForm: false,
    EditPosterForm: false,
    ConfirmDeletePopup: false
  }
}

const mutations = {
  showCreatePosterForm(state) {
    state.popupIsShown = true;
    state.popupState.CreatePosterForm = true;
  },
  hideCreatePosterForm(state) {
    state.popupIsShown = false;
    state.popupState.CreatePosterForm = false;
  },

  showEditPosterForm(state) {
    state.popupIsShown = true;
    state.popupState.EditPosterForm = true;
  },
  hideEditPosterForm(state) {
    state.popupIsShown = false;
    state.popupState.EditPosterForm = false;
  },

  showConfirmDeletePopup(state) {
    state.popupIsShown = true;
    state.popupState.ConfirmDeletePopup = true;
  },
  hideConfirmDeletePopup(state) {
    state.popupIsShown = false;
    state.popupState.ConfirmDeletePopup = false;
  },

  hideAllPopups(state) {
    state.popupIsShown = false;
    for (let item in state.popupState) {
      state.popupState[item] = false;
    }
  },
}

const actions = {
  showCreatePosterForm({ commit }) {
    commit('showCreatePosterForm');
  },
  hideCreatePosterForm({ commit }) {
    commit('hideCreatePosterForm');
  },

  showEditPosterForm({ commit }) {
    commit('showEditPosterForm');
  },
  hideEditPosterForm({ commit }) {
    commit('hideEditPosterForm');
  },

  showConfirmDeletePopup({ commit }) {
    commit('showConfirmDeletePopup');
  },
  hideConfirmDeletePopup({ commit }) {
    commit('hideConfirmDeletePopup');
  },

  hideAllPopups({ commit }) {
    commit('hideAllPopups');
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}