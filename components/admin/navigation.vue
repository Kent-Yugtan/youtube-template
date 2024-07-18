<template>
    <v-card class="header-container mx-auto overflow-hidden">
        <v-toolbar>
            <v-btn icon class="d-sm-none d-md-none d-lg-none d-xl-none" @click="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title>
                <img src="~/static/images/youtube-icon.png" alt="YouTube Icon" />
                {{ AppTitle }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.path">
                    <i class="me-1" :class="item.icon"></i>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
                <v-list-item-action>
                    <i :class="item.icon"></i>
                </v-list-item-action>
                <v-list-item-content>{{ item.title }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component<Navigation>({
    name:'Navigation',
})

export default class Navigation  extends Vue {
    drawer:boolean = false;
    AppTitle: String = 'Awesome Title';
    menuItems:Array<any> = [
        { title: 'Home', path: '/template', icon: 'fas fa-home-alt' },
        { title: 'Sign Up', path: '/signup', icon: 'fas fa-user-plus' },
        { title: 'Sign In', path: '/signin', icon: 'fas fa-sign-in-alt' }
    ]
}
</script>

<style lang='scss' scoped>
.header-container{
    img{
        width: 50px;
        height: 50px;
        margin-right:10px;
    }
}
</style>