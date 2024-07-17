import appState from './app.state';
import appGetters from './app.getters';
import appMutations from './app.mutations';
import appActions from './app.actions';

const state = () => appState

const getters = appGetters

const mutations = appMutations

const actions = appActions

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
