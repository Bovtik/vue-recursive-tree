//  Utils functions
//  TODO: Clear this out
function setCookie (cname, cvalue, exhours) {
  let d = new Date();
  d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//  Vuex User module

const state = {
  username: null,
  userId: null
}

const getters = {
  userIsAuth (state) {
    // let tokenIsPresent = getCookie('token');
    if (state.username && state.userId && getCookie('token')) {
      return true
    } else {
      return false
    }
  }
}

const mutations = {
  saveUserData (state, userData) {
    state.username = userData.username;
    state.userId = userData.id;
  },
  clearUserAuthData (state) {
    state.username = null;
    state.userId = null;
    document.cookie = "";
  }
}

const actions = {
  login ({ commit }, payload) {
    //  TODO: Find a better way using $router in module actions
    let router = payload.router;
    let authData = {
      username: payload.username,
      password: payload.password,
    };

    fetch('/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(authData)
    })
    .then(r => r.json())
    .then(data => {
      console.log(data);
      if (data.token && data.user) {
        setCookie('token', data.token, 1)
        localStorage.setItem('user', JSON.stringify(data.user));
        commit('saveUserData', data.user)
        router.push({ path: 'home' });
      } else {
        try {
          throw Error({ message: "Token or userdata not received", data: data })
        }
        catch (e) {
          console.log(data);
        }
      }
    });
  },
  logout ({ commit }, { router }) {
    commit('clearUserAuthData');
    router.push({ path: 'login' })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}