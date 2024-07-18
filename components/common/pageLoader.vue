<template>
    <v-overlay v-if="loading" class="page-loader-container" :value="true">
        <v-progress-circular indeterminate color="primary" size="80"></v-progress-circular>
    </v-overlay>
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