<template>
    <v-card class="card mt-3 ">
        <v-breadcrumbs :items="breadcrumbItem"></v-breadcrumbs>

        <v-container class="p-4">
            <v-row>
                <v-col>
                    <h3>{{ title }}</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md="10">
                    <p>{{ content }}</p>
                </v-col>
                <v-col md="2" class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex image-content">
                    <img :src="image"/>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component<card>({
    name:'card',
})

export default class card extends Vue {
    @Prop({default:""}) title:any;
    @Prop({default:""}) content:any;
    @Prop({default:""}) image:any;
    @Prop({ default: () => [] }) breadcrumbItem!: Array<any>;

}
</script>

<style lang='scss' scoped>
.card{
    background-color: #eff1fe;

    .content{
        span{
            font-size: 14px;
            font-weight: 400;

        }
    }

    .image-content{
        width: 150px;
        height: 150px;

        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>