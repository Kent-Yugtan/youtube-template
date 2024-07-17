import { Mutations } from '~/store/enums/app.enums';

export default {
    [Mutations.SET_FORM_ERRORS](state: { formErrors: any }, value: any) {
        state.formErrors = value;
    },
    [Mutations.SET_ALERT](state: { alert: any }, value: any) {
        state.alert = value;
    },
    [Mutations.SET_PAGE_LOADER](state: { pageLoading: any }, value: any) {
        state.pageLoading = value;
    },
}