export default class Store {
  constructor(state, actions, mutations) {
    this.state = state;
    this.actions = actions;
    this.mutations = mutations;
  }

  commit(type, payload) {
    this.mutations[type](this.state, payload);
    this.dispatch(type, payload);
  }

  dispatch(type, payload) {
    this.actions[type](this, payload);
  }
}

// mutations.js
