interface AlertModel {
    title: string;
    text: string;
    type: string;
}

export default ({
    formErrors: null,
    alert: null as unknown as AlertModel,
    pageLoading: false,
})