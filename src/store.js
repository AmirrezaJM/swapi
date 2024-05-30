export default class Store {
  constructor(state, actions, mutations) {
    this.state = state;
    this.actions = actions;
    this.mutations = mutations;
    this.listeners = [];
  }

  commit(mutation, payload) {
      if (typeof this.mutations[mutation] === 'function') {
          this.mutations[mutation](this.state, payload);
          this.notify();
      }
  }

  dispatch(action, payload) {
      if (typeof this.actions[action] === 'function') {
          return this.actions[action]({ commit: this.commit.bind(this) }, payload);
      }
  }

  subscribe(listener) {
      this.listeners.push(listener);
  }

  notify() {
      this.listeners.forEach(listener => listener(this.state));
  }
}

// mutations.js
