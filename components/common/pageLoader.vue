<template>
    <div v-if="loading" class="page-loader-container d-flex flex-column align-items-center justify-content-center">
        <i class="fad fa-spinner-third spinner fa-spin"></i>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Getters, Mutations } from '~/store/enums/app.enums'

@Component<PageLoaderComponent>({
    name: 'PageLoaderComponent',
})

export default class PageLoaderComponent extends Vue {
    
    get loading(){
        return this.$store.getters[`app/${Getters.GET_PAGE_LOADER}`];
    }
    set loading(value){
        this.$store.commit(`app/${Mutations.SET_PAGE_LOADER}`, value);
    }

}
</script>
<style lang="scss" scoped>
.page-loader-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.3);

    .spinner{
        font-size: 80px;
        color: #FFF;
    }
}
</style>