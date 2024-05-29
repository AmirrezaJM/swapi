import Store from './store.js';
import State from './state.js';
import Actions from './actions.js';
import Mutations from './mutations.js';

const store = new Store(new State(), new Actions(), new Mutations());

export default store;