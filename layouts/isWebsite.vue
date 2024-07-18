<template>
    <v-app>
        <v-main>
            <Navigation/>
            <PageLoader/>
            <NuxtChild/>
        </v-main>
        
        <Footer/>
    </v-app>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Navigation from '~/components/admin/navigation.vue'
import PageLoader from '~/components/common/pageLoader.vue'
import Footer from '~/components/footer/footer.vue'
@Component<websiteLayout>({
    name:'websiteLayout',
    components:{
        Navigation,
        PageLoader,
        Footer
    }

})

export default class websiteLayout  extends Vue {
    $pageLoader!:any;

    created(){
        this.$pageLoader(true);
        setTimeout(() => {
            this.$pageLoader(false);
        },1000);
    }
}
</script>

<style lang='scss' scoped>

</style>