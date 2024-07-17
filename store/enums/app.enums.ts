enum Actions {}

enum Mutations {
    SET_FORM_ERRORS = 'setFormError',
    SET_ALERT = 'setAlert',
    SET_PAGE_LOADER = 'setPageLoader',
}

enum Getters {
    GET_FORM_ERRORS = 'getFormError',
    GET_ALERT = 'getAlert',
    GET_PAGE_LOADER = 'getPageLoader',
}

export {
    Actions,
    Mutations,
    Getters
}