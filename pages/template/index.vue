<template>
    <v-container>
        <Card 
            :breadcrumbItem="breadcrumbItems"
            title="YouTube Thumbnail Templates"
            content="If you can only make one first impression you'd better make it a good one and now, thanks to our YouTube thumbnail templates, you can. Just select the elements that best fall in line with what you're trying to accomplish and you're ready to go - all of the hard work has already been done for you. Everything can be totally customized and even published right from your Web browser."
            :image="require('~/static/images/youtube-icon.png')"
        />
        
        <v-row class="mt-4">
            <v-col md="3" class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                <div class="d-grid gap-2 align-content-center mb-4">
                    <FormInput :hideDetails="true" type="text" v-model="keyword" placeholder="Search Template" class="mb-3">
                        <template #left-group-text>
                            <i class="fal fa-lock"></i>
                        </template>
                    </FormInput>

                    <v-btn @click="clearTitle" style="height: 48px;">
                        Clear
                    </v-btn>
                </div>

                <!-- SIDE BAR MENU  -->
                <SideBarSearch :data="data" @getTitle="getTitle"/>

            </v-col>

            <v-col sm="12" md="9">
                <h3>{{ menuTitle }}</h3>
                <VideoContainer :data="filterVideos"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Card from '~/components/common/content-card.vue'
import FormInput from '~/components/forms/FormInput.vue';
import SideBarSearch from '~/components/sidebar/sidebar-search.vue'
import VideoContainer from '~/components/common/video-container.vue';


// RESOURCE 
import SideBarResource from '~/models/resources/sidebarResources'

// MODEL
import { SideBarModel } from '~/models/sidebarModel'
@Component<indexTemplate>({
    name:'indexTemplate',
    components:{
        Card,
        FormInput,
        SideBarSearch,
        VideoContainer
    }
})

export default class indexTemplate extends Vue {
    data: Array<SideBarModel> = SideBarResource;
    keyword: any= null;
    menuTitle:any= null;
    allMenus:boolean = true;

    breadcrumbItems = [
        {
            text: 'Dashboard',
            disabled: false,
            href: '',
        },
        {
            text: 'Templates',
            disabled: false,
            href: '',
        },
        {
            text: 'YouTube Thumbnails',
            disabled: true,
            href: '',
        },
    ];

    getTitle(title:any, allMenus:boolean){
        this.menuTitle = title;
        this.allMenus = allMenus;
    }

    clearTitle(){
        this.menuTitle = "All Menus";
        this.allMenus = true;
    }

    get filterVideos(){
        if (this.allMenus) {
            return this.data
            .map((item: any) => 
                item.menu.map((menu: any) => 
                    menu.subMenu ? menu.subMenu.map((subMenu: any) => subMenu.thumbNails).flat() : []
                ).flat()
            ).flat();

        }else{
            const filteredMenu = this.data
                .map((item: any) => item.menu)
                .flat()
                .find((menu: any) => 
                    menu.subMenu 
                    ? menu.subMenu.some((subMenu: any) => subMenu.subMenuName === this.menuTitle) 
                    : menu.menuName === this.menuTitle
            );

            if (filteredMenu) {
                if (filteredMenu.subMenu?.some((subMenu: any) => subMenu.subMenuName === this.menuTitle)) {
                    const subMenu = filteredMenu.subMenu.find((subMenu: any) => subMenu.subMenuName === this.menuTitle);
                    return subMenu ? subMenu.thumbNails : [];
                } else if (filteredMenu.menuName === this.menuTitle) {
                    return filteredMenu.thumbNails || []; 
                }
            }
        }
    }

}
</script>

<style lang='scss' scoped>

</style>