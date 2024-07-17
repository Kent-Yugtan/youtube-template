import { Mutations } from '~/store/enums/app.enums'

export default ({ app, store }, inject) => {
    inject('pageLoader', (status) => {
        store.commit(`app/${ Mutations.SET_PAGE_LOADER }`, status)
    })
}