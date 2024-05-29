export default class Actions {
    addItem(context, payload) {
      context.commit('addItem', payload);
    }
  
    clearItem(context, payload) {
      context.commit('clearItem', payload);
    }
  }