import { Getters } from '~/store/enums/app.enums';

export default {
    [Getters.GET_FORM_ERRORS](state: any) {
        return state.formErrors
    },
    [Getters.GET_ALERT](state: any) {
        return state.alert
    },
    [Getters.GET_PAGE_LOADER](state: any) {
        return state.pageLoading
    },
}